using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class AccessoryPOController : Controller
    {
        public IActionResult PurchaseOrderAccessory(string type)
        {
            bool isGeneral = false;
            bool isSampling = false;
            bool isProduction = false;

            if (type == "General")
            {
                isGeneral = true;
            }

            if (type == "Sampling")
            {
                isSampling = true;
            }

            if (type == "Production")
            {
                isProduction = true;
            }

            ViewBag.PoType = type;
            ViewBag.isGeneral = isGeneral;
            ViewBag.isSampling = isSampling;
            ViewBag.isProduction = isProduction;
            ViewBag.Title = $"{type} Purchase Order";

            return View();
        }
    }
}
