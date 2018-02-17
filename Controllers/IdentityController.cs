
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

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
                var newUser = new User { Username = user.Email, };
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
        
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(User user, string returnUrl = null)
        {
            var url = returnUrl;
            if (ModelState.IsValid)
            {
                var result = await _signinManager.PasswordSignInAsync(user.Email, user.Password, user.isAdmin, lockoutOnFailure:false);
                if(result.Succeeded)
                {
                    _logger.LogInformation("User logged in ya bitch");
                    return new ObjectResult(user);
                }
            _logger.LogWarning("user not found");
                return new NotFoundResult();
            }
            _logger.LogWarning("model state invalid");
            return new NotFoundResult();
        }

    }
}
