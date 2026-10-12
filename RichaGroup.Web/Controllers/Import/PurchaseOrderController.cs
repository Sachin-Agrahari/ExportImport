using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class PurchaseOrderController : Controller
    {
         
        //public IActionResult Performance_Invoice()
        //{
        //    return View();
        //}
       
        public IActionResult Receive_Forward_Request()
        {
            return View();
        }
        public IActionResult Daily_Register()
        {
            return View();
        }
        public IActionResult Letter_Credit_Request()
        {
            return View();
        }
        public IActionResult Tt_Request()
        {
            return View();
        }
        public IActionResult Bill_Receivce()
        {
            return View();
        }

    }
}
