using Microsoft.AspNetCore.Mvc;

namespace RichaGroup.Web.Controllers;

public class BankInvoiceController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult viewBankInv()
    {
        return View();
    }
}
