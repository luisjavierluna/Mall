using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Mall_API.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DepartmentsController(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        [HttpGet("navbarMenuItems")]
        public async Task<IActionResult> GetAllMenuItems()
        {
            var departments = await _context.Departments
                .Select(x =>
                new
                {
                    Id = x.Id,
                    Name = x.Name,
                    Categories = x.Categories.Select(x =>
                    new
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Products = x.Products.Select(x =>
                        new {
                            Id = x.Id,
                            Name = x.Name
                        })
                    })
                }).ToListAsync();

            return Ok(departments);
        }
    }
}
