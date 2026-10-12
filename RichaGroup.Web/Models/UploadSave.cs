using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace ShippingDocuments.Web.Models
{
    public class UploadSave
    {
        private readonly IConfiguration _config;
        private readonly string _connectionString;

        public UploadSave(IConfiguration config)
        {
            _config = config;
            _connectionString = _config.GetConnectionString("DefaultConnection");
        }

        public async Task<bool> saveUploadDetails(string DocName, string DocTitle, string DocType, string DocURL, int DocCount, string MenuName, string productName, string userName)
        {
            try
            {
                string Query = @$"
                INSERT INTO tbl_UploadDocuments(DocName, DocTitle, DocType, DocURL, DocCount, IsActive, CreatedBy, CreatedDate, MenuName,productName)
		                                 VALUES('{DocName}', '{DocTitle}', '{DocType}', '{DocURL}', {DocCount}, 1, '{userName}', GETDATE(), '{MenuName}', '{productName}')
                ";

                using (var conn = new SqlConnection(_connectionString))
                {
                    using (var cmd = new SqlCommand(Query, conn))
                    {
                        conn.Open();
                        int rowsAffected = cmd.ExecuteNonQuery();
                        return rowsAffected > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<DataTable> getDocUrls(string DocName, bool isAllFile, string productName, string MenuName, bool isLocal)
        {
            try
            {
                string Query = @$" SELECT * FROM tbl_UploadDocuments WHERE productName = '{productName}' AND IsActive = 1 ";

                if (!isLocal)
                    Query += $" AND DocType <> 'PRG'";


                if (!isAllFile && productName != "PADS")
                {
                    Query += $" AND DocName = '{DocName}'";
                }
                if (!string.IsNullOrEmpty(MenuName))
                {
                    Query += $" AND MenuName = '{MenuName}'";
                }


                using (var conn = new SqlConnection(_connectionString))
                {
                    conn.Open();
                    using (var cmd = new SqlCommand(Query, conn))
                    {
                        using (var adapter = new SqlDataAdapter(cmd))
                        {
                            DataTable dt = new DataTable();
                            adapter.Fill(dt);
                            return dt;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while retrieving document URLs.", ex);
            }
        }


        public async Task<bool> DeleteDoc(int ID, string userName)
        {
            try
            {
                string Query = @$" UPDATE tbl_UploadDocuments SET IsActive = 0, UpdatedBy = '{userName}', UpdatedDate = GETDATE()  WHERE DocID = {ID} ";
                using (var conn = new SqlConnection(_connectionString))
                {
                    using (var cmd = new SqlCommand(Query, conn))
                    {
                        conn.Open();
                        int rowsAffected = cmd.ExecuteNonQuery();
                        return rowsAffected > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public async Task<bool> SaveMenu(string menuName, string productName)
        {
            try
            {
                string Query = @$" 
                     INSERT INTO tbl_DocMenuName(MenuName,ProductName)
                     VALUES('{menuName}','{productName}')
                ";

                using (var conn = new SqlConnection(_connectionString))
                {
                    using (var cmd = new SqlCommand(Query, conn))
                    {
                        conn.Open();
                        int rowsAffected = cmd.ExecuteNonQuery();
                        return rowsAffected > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }


        public async Task<DataTable> GetMenus(string ProductName)
        {
            try
            {
                string Query = @$" SELECT * FROM TBL_DOCMENUNAME WHERE ProductName = '{ProductName}' ORDER BY MENUNAME ";

                using (var conn = new SqlConnection(_connectionString))
                {
                    conn.Open();
                    using (var cmd = new SqlCommand(Query, conn))
                    {
                        using (var adapter = new SqlDataAdapter(cmd))
                        {
                            DataTable dt = new DataTable();
                            adapter.Fill(dt);
                            return dt;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while retrieving document URLs.", ex);
            }
        }

        public async Task<DataTable> DowenlodExcel()
        {
            try
            {
                string Query = @"
                    SELECT 
	                    CASE WHEN ISNULL(D.MenuName,'') ='' THEN  p.Menu_Name ELSE D.MenuName END  
	                    Module,
	                    DocName,
	                    DocTitle,
	                    DocType,
	                    DocURL,
	                    DocCount 
                    FROM tbl_UploadDocuments D 
                    LEFT JOIN tbl_mainmenu m ON D.DocName = m.Menu_Name
                    LEFT JOIN tbl_mainmenu p ON m.Parent_Id = p.id
                    WHERE ProductName ='DOCUMENTS' AND D.IsActive = 1  
                    ORDER BY 1,2
                ";

                using (var conn = new SqlConnection(_connectionString))
                {
                    conn.Open();
                    using (var cmd = new SqlCommand(Query, conn))
                    {
                        using (var adapter = new SqlDataAdapter(cmd))
                        {
                            DataTable dt = new DataTable();
                            adapter.Fill(dt);
                            return dt;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while retrieving document URLs.", ex);
            }
        }

        public async Task<DataTable> GetFinalLayout(int ID)
        {
            try
            {
                string Query = @$"
                    SELECT IsFinal FROM tbl_mainmenu WHERE ID = {ID}
                ";

                using (var conn = new SqlConnection(_connectionString))
                {
                    conn.Open();
                    using (var cmd = new SqlCommand(Query, conn))
                    {
                        using (var adapter = new SqlDataAdapter(cmd))
                        {
                            DataTable dt = new DataTable();
                            adapter.Fill(dt);
                            return dt;
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("An error occurred while retrieving document URLs.", ex);
            }
        }

        public async Task<bool> saveFinalLayout(int ID, string userName)
        {
            try
            {
                string Query = @$" 
                     UPDATE tbl_mainmenu SET IsFinal = 1, UpdatedBy = '{userName}', UpdatedDate = GETDATE() WHERE ID = {ID}
                ";

                using (var conn = new SqlConnection(_connectionString))
                {
                    using (var cmd = new SqlCommand(Query, conn))
                    {
                        conn.Open();
                        int rowsAffected = cmd.ExecuteNonQuery();
                        return rowsAffected > 0;
                    }
                }
            }
            catch (Exception ex)
            {
                return false;
            }
        }
         
    }
}
