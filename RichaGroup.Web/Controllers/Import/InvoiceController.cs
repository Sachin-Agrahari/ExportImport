using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class InvoiceController : Controller
    {
        public IActionResult Peroforma_Invoice(string Type)
        {
            bool isFabric = false;
            if (Type == "Fabric")
                isFabric = true;

            ViewBag.isFabric = isFabric;
            ViewBag.Type = Type;
            return View();
        }
        
        public IActionResult Commercial_Invoice(string Type)
        {
            bool isFabric = false;
            if (Type == "Fabric")
                isFabric = true;

            ViewBag.isFabric = isFabric;
            ViewBag.Type = Type;
            return View();
        }
    }
}
