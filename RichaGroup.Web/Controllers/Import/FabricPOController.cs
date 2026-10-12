using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class FabricPOController : Controller
    {
        public IActionResult PurchaseOrderFabric(string type)
        {
            bool isGeneral = false;
            if (type == "General")
            {
                isGeneral = true;
            }
            ViewBag.isGeneral = isGeneral;
            ViewBag.PoType = type;
            ViewBag.Title = $"{type} Purchase Order";

            return View();
        }
    }
}
