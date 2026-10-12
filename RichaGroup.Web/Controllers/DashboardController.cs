using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
