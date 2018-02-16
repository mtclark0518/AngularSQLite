using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using AngularSQLite.Models;

namespace AngularSQLite.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    public class IdentityController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signinManager;
        private readonly ILogger _logger;

        public IdentityController(
            UserManager<User> userManager,
            SignInManager<User> signinManager,
            ILogger<IdentityController> logger)
        {
            _userManager = userManager;
            _signinManager = signinManager;
            _logger = logger;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Login()
        {
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);
            Console.WriteLine();
            return View();
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(User user, string returnUrl = null)
        {
            var url = returnUrl;
            if (ModelState.IsValid)
            {
                var newUser = new User { Email = user.Email, };
                var result = await _userManager.CreateAsync(newUser, user.Password);
                if(result.Succeeded)
                {
                    _logger.LogInformation("User created ya bitch");
                    await _signinManager.SignInAsync(newUser, isPersistent: false);
                    _logger.LogInformation("new account created");
                    return new ObjectResult(newUser);
                }
            }
            return new NotFoundObjectResult(user);
        }
    }
}
