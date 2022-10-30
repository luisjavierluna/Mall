using Mall_API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Mall_API.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CategoriesController(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _context.Categories.Select(p =>
            new
            {
                Id = p.Id,
                Name = p.Name,
                DepartmentId = p.Department.Id,
                DepartmentName = p.Department.Name

            }).ToListAsync();

            return Ok(categories);
        }

        [HttpPost]
        public async Task<IActionResult> PostCategory([FromBody] Category category)
        {
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();

            return Ok(category);
        }
    }
}
