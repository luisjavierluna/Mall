    namespace Mall_API.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
        public ICollection<Product> Products { get; set; }
    }
}
