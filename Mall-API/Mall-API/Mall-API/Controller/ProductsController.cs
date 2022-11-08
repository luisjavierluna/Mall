using AutoMapper;
using Mall_API.DTOs;
using Mall_API.Entities;
using Mall_API.Utilities;
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
        private readonly IMapper mapper;
        private readonly IFileStorage fileStorage;
        private readonly string container = "products";

        public ProductsController(
            ApplicationDbContext _context,
            IMapper mapper,
            IFileStorage fileStorage)
        {
            this._context = _context;
            this.mapper = mapper;
            this.fileStorage = fileStorage;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _context.Products.Select(p =>
            new
            {
                Id = p.Id,
                Name = p.Name,
                Image = p.Image,
                CategoryId = p.Category.Id,
                CategoryName = p.Category.Name,
                DepartmentId = p.Department.Id,
                DepartmentName = p.Department.Name

            }).ToListAsync();

            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> PostProduct([FromForm] ProductCreationDTO productCreationDTO)
        {
            var product = mapper.Map<Product>(productCreationDTO);

            if (productCreationDTO.Image != null)
            {
                product.Image = await fileStorage.SaveFile(container, productCreationDTO.Image);
            }

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
        public async Task<IActionResult> PutProduct([FromForm] ProductCreationDTO newProduct, int Id)
        {
            var productToUpdate = await _context.Products.FirstOrDefaultAsync(x => x.Id == Id);

            if (productToUpdate == null)
            {
                return NotFound("Product not found");
            }

            productToUpdate = mapper.Map(newProduct, productToUpdate);

            if (newProduct.Image != null)
            {
                productToUpdate.Image = await fileStorage.EditFile(container, newProduct.Image, productToUpdate.Image);
            }

            await _context.SaveChangesAsync();

            return Ok(productToUpdate);
        }

        [HttpDelete("{Id:int}")]
        public async Task<IActionResult> DeleteProduct(int Id)
        {
            var productToDelete = await _context.Products.FirstOrDefaultAsync(x => x.Id == Id);

            if (productToDelete == null)
            {
                return NotFound("Product not found");
            }

            _context.Products.Remove(productToDelete);
            await _context.SaveChangesAsync();

            await fileStorage.DeleteFile(productToDelete.Image, container);

            return Ok(productToDelete);
        }
    }
}
