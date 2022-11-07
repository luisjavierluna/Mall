namespace Mall_API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public int DepartmentId { get; set; }
        public Department Department { get; set; }
    }
}
