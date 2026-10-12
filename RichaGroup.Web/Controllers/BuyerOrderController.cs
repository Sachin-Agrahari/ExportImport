using Microsoft.AspNetCore.Mvc;

namespace RichaGroup.Web.Controllers;

public class BuyerOrderController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
