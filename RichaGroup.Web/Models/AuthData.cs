using Microsoft.Data.SqlClient;
using System.Data;

namespace ShippingDocuments.Web.Models
{
    public class AuthData
    {
        private readonly IConfiguration _config;
        private readonly string _connectionString;
        private string Query = string.Empty;

        public AuthData(IConfiguration config)
        {
            _config = config;
            _connectionString = _config.GetConnectionString("DefaultConnection");
        }

        public async Task<DataTable> getMenus(string moduleType)
        {
            try
            { 

                Query = @$" 
                    SELECT * FROM tbl_mainmenu 
                     WHERE UserRole like '%{moduleType}%' AND IsActive = 1 
                     ORDER BY  ParentSeq,Seq,Menu_Name
                ";

                using (var conn = new SqlConnection(_connectionString))
                {
                    await conn.OpenAsync();

                    using (var cmd = new SqlCommand(Query, conn))
                    using (var adapter = new SqlDataAdapter(cmd))
                    {
                        DataTable dt = new DataTable();
                        adapter.Fill(dt);
                        return dt;
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception(
                    "An error occurred while retrieving document URLs.",
                    ex
                );
            }
        }
    }
}
