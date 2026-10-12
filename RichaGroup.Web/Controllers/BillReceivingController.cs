using Microsoft.AspNetCore.Mvc;

namespace RichaGroup.Web.Controllers;

public class BillReceivingController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}
