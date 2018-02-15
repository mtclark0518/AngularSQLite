using System;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularSQLite.Models;
// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularSQLite.Controllers
{
    [Route("api/[controller]")]
    public class ShitController : Controller
    {
        private readonly ShitContext _context;

        public ShitController(ShitContext context)
        {
            _context = context;
        }
        [HttpGet("shit")]
        // GET: /<controller>/
        public async Task<IActionResult> Index()
        {
            var shit = await _context.Shit.ToListAsync();
            return new ObjectResult(shit);
        }
    }
}
