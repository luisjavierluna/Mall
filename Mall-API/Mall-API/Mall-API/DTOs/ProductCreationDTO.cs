using Mall_API.Entities;

namespace Mall_API.DTOs
{
    public class ProductCreationDTO
    {
        public string Name { get; set; }
        //public IFormFile Image { get; set; }
        public int CategoryId { get; set; }
        public int DepartmentId { get; set; }
    }
}
