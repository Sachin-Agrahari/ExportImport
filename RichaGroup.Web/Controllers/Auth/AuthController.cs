using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SAP_QueryManager.DTO;
using ShippingDocuments.Web.Models;
using System.Data; 

namespace ShippingDocuments.Web.Controllers.Auth
{
    public class AuthController : Controller
    {
        private readonly AuthData _auth;
        private readonly IConfiguration _config;

        public AuthController(AuthData auth, IConfiguration config)
        {
            _auth = auth;
            _config = config;
        }

        
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> GetLogin([FromBody] LoginDTO request)
        {
            try
            {
                string baseUrl = _config["Apisettings:coreApi"];

                using (var client = new HttpClient())
                {
                    string url = $"{baseUrl}/Login/GetLogin?code={request.EmployeeCode}&pwd={Uri.EscapeDataString(request.Password)}";

                    HttpResponseMessage response = await client.PostAsync(url, null);

                    if (response.IsSuccessStatusCode)
                    {
                        //HttpContext.Session.SetString("EmployeeCode", request.EmployeeCode);
                        //HttpContext.Session.SetString("LoginTime", DateTime.Now.ToString());

                        var responseMessage = await response.Content.ReadAsStringAsync();
                        dynamic result = JsonConvert.DeserializeObject(responseMessage);
                        string UserName = result.userName;
                        string UserRoal = result.userRole;
                        string authToken = result.token;
                        string empCode = result.empCode;

                        HttpContext.Session.SetString("UserName", UserName);
                        HttpContext.Session.SetString("UserRole", UserRoal);
                        HttpContext.Session.SetString("authToken", authToken);

                        return Json(new
                        {
                            success = true,
                            message = "Login successful.",
                            empCode= empCode
                        });
                    }

                    return Json(new
                    {
                        success = false,
                        message = "Invalid employee code or password.",
                        empCode = ""
                    });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    success = false,
                    message = ex.Message,
                    empCode = ""
                });
            }
        }

        public async Task<IActionResult> getMenus(string moduleType)
        {
            try
            {
                DataTable dt = await _auth.getMenus(moduleType);
                if(dt.Rows.Count>0)
                {
                    var res = JsonConvert.SerializeObject(dt);
                    return Ok(new
                    {
                        success = true,
                        data = res
                    });
                }
                else
                {
                    return NotFound(new
                    {
                        success = false,
                        message = "Data Not Found"
                    });
                }
            }
            catch(Exception ex)
            {
                return StatusCode(500, new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }
    }
}
