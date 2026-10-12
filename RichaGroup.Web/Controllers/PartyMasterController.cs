using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class PartyMasterController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
