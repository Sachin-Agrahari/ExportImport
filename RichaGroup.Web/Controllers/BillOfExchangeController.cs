using Microsoft.AspNetCore.Mvc;

namespace RichaGroup.Web.Controllers;

public class BillOfExchangeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
