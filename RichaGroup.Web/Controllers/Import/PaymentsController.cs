using Microsoft.AspNetCore.Mvc;

namespace ShippingDocuments.Web.Controllers
{
    public class PaymentsController : Controller
    {
        public IActionResult TT_Payment(string Type, int modal = 0)
        {
            bool isFabric = false;
            if (Type == "Fabric")
                isFabric = true;

            ViewBag.isFabric = isFabric;
            ViewBag.Type = Type;
            ViewBag.IsModal = modal == 1;
            return View();
        }

        public IActionResult LetterOfCredit(string Type, int modal = 0)
        {
            bool isFabric = false;
            if (Type == "Fabric")
                isFabric = true;

            ViewBag.isFabric = isFabric;
            ViewBag.Type = Type;
            ViewBag.IsModal = modal == 1;
            return View();
        }

        public IActionResult TransactionForword(string Type)
        {
            bool isFabric = false;
            if (Type == "Fabric")
                isFabric = true;

            ViewBag.isFabric = isFabric;
            ViewBag.Type = Type;
            return View();
        }

        public IActionResult TransactionStatus()
        {
            return View();
        }
    }
}
