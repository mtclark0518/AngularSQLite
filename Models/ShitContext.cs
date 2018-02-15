using System;
using Microsoft.EntityFrameworkCore;
using AngularSQLite.Models;
namespace AngularSQLite.Models
{
    public class ShitContext : DbContext
    {
        public ShitContext(DbContextOptions<ShitContext> options)
            : base(options)
        {}
        public DbSet<AngularSQLite.Models.Shit> Shit { get; set; }
    }
}
