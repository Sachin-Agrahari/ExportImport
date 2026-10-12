
using Azure.Core;
using Microsoft.AspNetCore.Mvc;
using ShippingDocuments.Web.Models;
using System.Data;
using Newtonsoft.Json;
using System.Text.Json.Serialization;
using ClosedXML.Excel;
using System.Net;
using System.Net.Sockets;

namespace ShippingDocuments.Web.Controllers
{
    public class FileHandlerController : Controller
    {
        private readonly IConfiguration _config;
        private readonly ILogger<FileHandlerController> _logger;
        private readonly UploadSave _uploadSave;

        public FileHandlerController(IConfiguration config, ILogger<FileHandlerController> logger)
        {


            _config = config;
            _logger = logger;
            _uploadSave = new UploadSave(config);
        }

        public IActionResult DocumenentUpload()
        {
            return View();
        }

        //[HttpGet("check-connection")] // This makes the URL: api/network/check-connection
        public IActionResult CheckConnection()
        {
            // 1. Get the remote IP address from the current HttpContext
            IPAddress? remoteIp = HttpContext.Connection.RemoteIpAddress;

            if (remoteIp == null)
            {
                return BadRequest(new { Message = "Could not resolve IP address." });
            }

            // 2. Call the extension method we placed in Program.cs
            bool isLocal = remoteIp.IsLocalIp();

            // 3. Return the JSON response
            return Ok(new
            {
                ClientIp = remoteIp.ToString(),
                IsLocal = isLocal,
                IsPublicInternet = !isLocal
            });
        }

        [HttpPost]
        public async Task<IActionResult> UploadFiles(List<IFormFile> files, string DocTitle, string DocName, string DocType, int DocCount, string MenuName, string productName)
        {
            if (files == null || files.Count == 0)
            {
                return Json(new
                {
                    success = false,
                    message = "No files received."
                });
            }

            if (string.IsNullOrWhiteSpace(DocTitle))
            {
                return Json(new
                {
                    success = false,
                    message = "Report title is required."
                });
            }

            if (string.IsNullOrWhiteSpace(DocName))
            {
                return Json(new
                {
                    success = false,
                    message = "Main page name is required."
                });
            }

            string userName = HttpContext.Session.GetString("UserName") ?? "";
            var request = HttpContext.Request;
            string baseUrl = $"{request.Scheme}://{request.Host}";

            string basePath = _config["filePath"];

            var pageFolder = Path.Combine(basePath, productName, DocName);

            if (!Directory.Exists(pageFolder))
            {
                Directory.CreateDirectory(pageFolder);
            }

            var safeReportTitle = string.Join("_",
                DocTitle.Split(
                    Path.GetInvalidFileNameChars(),
                    StringSplitOptions.RemoveEmptyEntries
                )
            );

            var existingFiles = Directory.GetFiles(pageFolder);

            int fileCount = existingFiles.Length + 1;

            var uploaded = new List<object>();

            foreach (var file in files)
            {
                if (file == null || file.Length <= 0)
                    continue;

                var extension = Path.GetExtension(file.FileName);

                var newFileName = $"{safeReportTitle}_{fileCount}{extension}";

                var filePath = Path.Combine(pageFolder, newFileName);

                var imgURL = $"uploadedReports/{productName}/{Uri.EscapeDataString(DocName)}/{Uri.EscapeDataString(newFileName)}";

                await _uploadSave.saveUploadDetails(DocName, DocTitle, DocType, imgURL, DocCount, MenuName, productName, userName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                uploaded.Add(new
                {
                    originalName = file.FileName,
                    savedAs = newFileName,
                    size = file.Length,
                    count = fileCount
                });

                fileCount++;
            }

            return Json(new
            {
                success = true,
                files = uploaded
            });
        }

        [HttpGet]
        public async Task<IActionResult> GetFiles(string DocName, bool isAllFile, string productName, string menuName)
        {
            if (string.IsNullOrWhiteSpace(DocName))
            {
                return Json(new
                {
                    success = false,
                    message = "Main page name is required."
                });
            }
            IPAddress? remoteIp = HttpContext.Connection.RemoteIpAddress;
            bool isLocal = remoteIp.IsLocalIp();


            DataTable dt = await _uploadSave.getDocUrls(DocName, isAllFile, productName, menuName, isLocal);

            var res = JsonConvert.SerializeObject(dt);
            return Ok(new
            {
                success = true,
                data = res
            });
        }

        public async Task<IActionResult> DeleteDoc(int ID)
        {
            if (ID == 0)
            {
                return Json(new
                {
                    success = false,
                    message = "ID is required."
                });
            }

            string userName = HttpContext.Session.GetString("UserName") ?? "";
            bool ISsuccess = await _uploadSave.DeleteDoc(ID, userName);

            if (ISsuccess)
            {
                return Ok(new
                {
                    success = true,
                    Message = "Data Deletd Successfully"
                });
            }
            else
            {
                return NotFound(new
                {
                    success = false,
                    message = "Faild To Delete Data"
                });
            }
        }

        [HttpPost]
        public async Task<IActionResult> SaveMenu(string menuName, string productName)
        {
            if (string.IsNullOrEmpty(menuName))
            {
                return Json(new
                {
                    success = false,
                    message = "Menu Name is required."
                });
            }
             
            bool ISsuccess = await _uploadSave.SaveMenu(menuName, productName);

            if (ISsuccess)
            {
                return Ok(new
                {
                    success = true,
                    Message = "Data Saved Successfully"
                });
            }
            else
            {
                return NotFound(new
                {
                    success = false,
                    message = "Faild To Save Data"
                });
            }
        }

        [HttpPost]
        public async Task<IActionResult> DowenlodExcel()
        {
            try
            {
                DataTable dt = await _uploadSave.DowenlodExcel();
                using (var workbook = new XLWorkbook())
                {
                    var worksheet = workbook.Worksheets.Add("Asset Details");
                    worksheet.Cell(1, 1).InsertTable(dt);
                    using (var stream = new MemoryStream())
                    {
                        workbook.SaveAs(stream);
                        stream.Position = 0;
                        return File(
                            stream.ToArray(),
                            $"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", $"UploadedDocs.xlsx"
                        );
                    }
                }
            }
            catch (Exception ex)
            {

                _logger.LogError(ex.Message, "An error occurred while fetching Report Details");

                return StatusCode(500, new
                {
                    success = false,
                    message = "An error occurred while fetching Report Details"
                });
            }

        }

        [HttpGet]
        public async Task<IActionResult> GetMenus(string ProductName)
        {

            DataTable dt = await _uploadSave.GetMenus(ProductName);

            var res = JsonConvert.SerializeObject(dt);
            return Ok(new
            {
                success = true,
                data = res
            });
        }

        [HttpGet]
        public async Task<IActionResult> GetFinalLayout(int ID)
        {

            DataTable dt = await _uploadSave.GetFinalLayout(ID);

            if(dt.Rows.Count == 0)
            {
                return NotFound(new
                {
                    success = false,
                    message = "No data found for the given ID."
                });
            }

            else
            {
                bool isFinalLayout =  Convert.ToBoolean(dt.Rows[0]["IsFinal"]);
                return Ok(new
                {
                    success = true,
                    data = isFinalLayout
                });
            }
                
        }

        [HttpPost]
        public async Task<IActionResult> saveFinalLayout(int ID)
        {
            string userName = HttpContext.Session.GetString("UserName") ?? "";
            bool isSuccess = await _uploadSave.saveFinalLayout(ID, userName);

            if (isSuccess)
            {
                return Ok(new
                {
                    success = true,
                    Message = "Data Saved Successfully"
                });
            }
            else
            {
                return NotFound(new
                {
                    success = false,
                    message = "Faild To Save Data"
                });
            }

        }

    }
}