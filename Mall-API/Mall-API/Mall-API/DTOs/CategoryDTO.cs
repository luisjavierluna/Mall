using Mall_API.Entities;

namespace Mall_API.DTOs
{
    public class CategoryDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
    }
}
