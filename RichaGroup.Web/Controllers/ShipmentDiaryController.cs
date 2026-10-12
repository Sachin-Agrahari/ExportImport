using Microsoft.AspNetCore.Mvc;

namespace RichaGroup.Web.Controllers;

public class ShipmentDiaryController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
