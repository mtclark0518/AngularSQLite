using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using AngularSQLite.Models;
namespace AngularSQLite.Models
{
    public class UserIdentity : IdentityDbContext<User>
    {
        public UserIdentity(DbContextOptions<UserIdentity> options)
            : base(options)
        { }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        public DbSet<AngularSQLite.Models.User> User { get; set; }
    }
}
