using Serilog;
using ShippingDocuments.Web.Controllers;
using ShippingDocuments.Web.Models;
using System.Net;
using System.Net.Sockets;

Log.Logger = new LoggerConfiguration()
    .WriteTo.File(
        $"LogManager/log_{DateTime.Now:yyyyMMdd_HHmmss}.txt",
        rollingInterval: RollingInterval.Day)
    .CreateLogger();

 

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog();

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

builder.Services.AddScoped<AuthData>();

var app = builder.Build();

// Configure the HTTP request pipeline.

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapGet("/check-connection", (HttpContext context) =>
{
    var remoteIp = context.Connection.RemoteIpAddress   ;

    if (remoteIp == null) return Results.BadRequest("Could not resolve IP.");

    // Using our extension method
    bool isLocal = remoteIp.IsLocalIp();

    return Results.Ok(new
    {
        ClientIp = remoteIp.ToString(),
        IsLocal = isLocal,
        IsPublicInternet = !isLocal
    });
});

app.UseSession();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Dashboard}/{action=Index}/{id?}");

app.Run();
 


public static class IpCheckExtensions
{
    public static bool IsLocalIp(this IPAddress ip)
    {
        if (IPAddress.IsLoopback(ip))
            return true;

        if (ip.IsIPv4MappedToIPv6 && IPAddress.IsLoopback(ip.MapToIPv4()))
            return true;

        byte[] bytes = ip.AddressFamily == AddressFamily.InterNetworkV6
            ? ip.MapToIPv4().GetAddressBytes()
            : ip.GetAddressBytes();

        if (bytes.Length == 4)
        {
            return bytes[0] == 10 ||
                  (bytes[0] == 172 && bytes[1] >= 16 && bytes[1] <= 31) ||
                  (bytes[0] == 192 && bytes[1] == 168);
        }

        return false;
    }
}