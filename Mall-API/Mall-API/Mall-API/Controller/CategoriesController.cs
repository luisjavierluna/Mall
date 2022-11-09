﻿using AutoMapper;
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
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper mapper;
        private readonly IFileStorage fileStorage;
        private readonly string container = "categories";

        public CategoriesController(
            ApplicationDbContext _context,
            IMapper mapper,
            IFileStorage fileStorage)
        {
            this._context = _context;
            this.mapper = mapper;
            this.fileStorage = fileStorage;
        }

        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _context.Categories.Select(c =>
            new
            {
                c.Id,
                c.Name,
                c.Image,
                DepartmentId = c.Department.Id,
                DepartmentName = c.Department.Name

            }).ToListAsync();

            return Ok(categories);
        }

        [HttpPost]
        public async Task<IActionResult> PostCategory([FromForm] CategoryCreationDTO categoryCreationDTO)
        {
            var category = mapper.Map<Category>(categoryCreationDTO);

            if (categoryCreationDTO.Image != null)
            {
                category.Image = await fileStorage.SaveFile(container, categoryCreationDTO.Image);
            }

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
        public async Task<IActionResult> PutCategory([FromForm] CategoryCreationDTO newCategory, int Id)
        {
            var categoryToUpdate = await _context.Categories.FirstOrDefaultAsync(x => x.Id == Id);

            if (categoryToUpdate == null)
            {
                return NotFound("Category not found");
            }

            categoryToUpdate = mapper.Map(newCategory, categoryToUpdate);

            if (newCategory.Image != null)
            {
                categoryToUpdate.Image = await fileStorage.EditFile(container, newCategory.Image, categoryToUpdate.Image);
            }

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

            await fileStorage.DeleteFile(categoryToDelete.Image, container);
            
            return Ok(categoryToDelete);
        }
    }
}
