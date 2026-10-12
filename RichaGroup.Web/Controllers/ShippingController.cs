using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class ShippingController : Controller
    {
        public IActionResult Debit_Note_Entry()
        {
            return View();
        }
        public IActionResult Local_Sales()
        {
            return View();
        }
        public IActionResult Generate_Carton()
        {
            return View();
        }
        public IActionResult Carton_Weight_Details()
        {
            return View();
        }
        public IActionResult GSP_Invoice_Generation()
        {
            return View();
        }
    }
}
