using Mall_API.Entities;
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

        [HttpGet]
        public async Task<IActionResult> GetDepartments()
        {
            var departments = await _context.Departments.Select(p =>
            new
            {
                Id = p.Id,
                Name = p.Name
            }).ToListAsync();

            return Ok(departments);
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

        [HttpPost]
        public async Task<IActionResult> PostDepartment([FromBody] Department department)
        {
            await _context.Departments.AddAsync(department);
            await _context.SaveChangesAsync();

            return Ok(department);
        }

        [HttpGet("{Id:int}")]
        public async Task<IActionResult> GetDepartment(int Id)
        {
            var existingDepartment = await _context.Departments.FirstOrDefaultAsync(x => x.Id == Id);

            if (existingDepartment == null)
            {
                return NotFound("Department not found");
            }

            return Ok(existingDepartment);
        }

        [HttpPut("{Id:int}")]
        public async Task<IActionResult> PutDepartment([FromBody] Department newDepartment, int Id)
        {
            var departmentToUpdate = await _context.Departments.FirstOrDefaultAsync(x => x.Id == Id);

            if (departmentToUpdate == null)
            {
                return NotFound("Department not found");
            }

            departmentToUpdate.Name = newDepartment.Name;

            await _context.SaveChangesAsync();

            return Ok(departmentToUpdate);
        }
    }
}
