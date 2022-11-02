using Mall_API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Mall_API.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext _context)
        {
            this._context = _context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _context.Products.Select(p =>
            new
            {
                Id = p.Id,
                Name = p.Name,
                CategoryId = p.Category.Id,
                CategoryName = p.Category.Name,
                DepartmentId = p.Department.Id,
                DepartmentName = p.Department.Name

            }).ToListAsync();

            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> PostProduct([FromBody] Product product)
        {
            await _context.Products.AddAsync(product);
            await _context.SaveChangesAsync();

            return Ok(product);
        }

        [HttpGet("{Id:int}")]
        public async Task<IActionResult> GetProduct(int Id)
        {
            var existingProduct = await _context.Products.FirstOrDefaultAsync(x => x.Id == Id);

            if (existingProduct == null)
            {
                return NotFound("Product not found");
            }

            return Ok(existingProduct);
        }

        [HttpPut("{Id:int}")]
        public async Task<IActionResult> PutProduct([FromBody] Product newProduct, int Id)
        {
            var productToUpdate = await _context.Products.FirstOrDefaultAsync(x => x.Id == Id);

            if (productToUpdate == null)
            {
                return NotFound("Product not found");
            }

            productToUpdate.Name = newProduct.Name;
            productToUpdate.CategoryId = newProduct.CategoryId;
            productToUpdate.DepartmentId = newProduct.DepartmentId;

            await _context.SaveChangesAsync();

            return Ok(productToUpdate);
        }
    }
}
