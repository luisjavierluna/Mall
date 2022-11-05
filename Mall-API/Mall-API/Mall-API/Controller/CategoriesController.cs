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

        [HttpGet("{Id:int}")]
        public async Task<IActionResult> GetCategory(int Id)
        {
            var existingCategory = await _context.Categories.FirstOrDefaultAsync(x => x.Id == Id);

            if (existingCategory == null)
            {
                return NotFound("Category not found");
            }

            return Ok(existingCategory);
        }

        [HttpPut("{Id:int}")]
        public async Task<IActionResult> PutCategory([FromBody] Category newCategory, int Id)
        {
            var categoryToUpdate = await _context.Categories.FirstOrDefaultAsync(x => x.Id == Id);

            if (categoryToUpdate == null)
            {
                return NotFound("Category not found");
            }

            categoryToUpdate.Name = newCategory.Name;
            categoryToUpdate.DepartmentId = newCategory.DepartmentId;

            await _context.SaveChangesAsync();

            return Ok(categoryToUpdate);
        }

        [HttpDelete("{Id:int}")]
        public async Task<IActionResult> DeleteCategory(int Id)
        {
            var categoryToDelete = await _context.Categories.FirstOrDefaultAsync(x => x.Id == Id);

            if (categoryToDelete == null)
            {
                return NotFound("Category not found");
            }

            _context.Categories.Remove(categoryToDelete);
            await _context.SaveChangesAsync();
            return Ok(categoryToDelete);
        }
    }
}
