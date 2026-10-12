using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class AccessoryController : Controller
    {
        public IActionResult Payment_Request_Accessory()
        {
            return View();
        }

        public IActionResult Import_Tag_Entry() 
        {
            return View();
        }

        public IActionResult BondMaster() 
        {
            return View();
        }

        public IActionResult viewBond() 
        {
            return View();
        }
        public IActionResult PoNoChanging() 
        {
            return View();
        }
        public IActionResult Po_Open_Close() 
        {
            return View();
        }

    }
}
