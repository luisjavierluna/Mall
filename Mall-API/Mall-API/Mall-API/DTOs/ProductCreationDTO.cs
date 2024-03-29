﻿using Mall_API.Entities;
using System.ComponentModel.DataAnnotations;

namespace Mall_API.DTOs
{
    public class ProductCreationDTO
    {
        [Required]
        public string Name { get; set; }
        public IFormFile Image { get; set; }
        public decimal Price { get; set; }
        [Range(0, 1)]
        public decimal Discount { get; set; }
        public string Description { get; set; }
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "You must select a {0} from the list")]
        [Display(Name = "Category")]
        public int CategoryId { get; set; }
        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "You must select a {0} from the list")]
        [Display(Name = "Department")]
        public int DepartmentId { get; set; }
    }
}
