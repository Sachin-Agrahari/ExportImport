using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class LicenceController : Controller
    {
        public IActionResult AdvanceLicence()
        {
            return View();
        }
    }
}
