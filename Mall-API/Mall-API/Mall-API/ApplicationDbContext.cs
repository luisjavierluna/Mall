using Mall_API.Entities;
using Microsoft.EntityFrameworkCore;

namespace Mall_API
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Department> Departments { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>(department =>
            {
                department.ToTable("Departments");

                department.HasKey(d => d.Id);

                department.Property(d => d.Name).IsRequired();
            });

            modelBuilder.Entity<Category>(category =>
            {
                category.ToTable("Categories");

                category.HasKey(a => a.Id);

                category.Property(a => a.Name).IsRequired();

                category.HasOne(a => a.Department)
                    .WithMany(d => d.Categories)
                    .HasForeignKey(a => a.DepartmentId)
                    .IsRequired()
                    .OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<Product>(product =>
            {
                product.ToTable("Products");

                product.HasKey(s => s.Id);

                product.Property(s => s.Name).IsRequired();

                product.Property(s => s.Image);

                product.HasOne(s => s.Category)
                .WithMany(a => a.Products)
                .HasForeignKey(s => s.CategoryId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);

                product.HasOne(s => s.Department)
                .WithMany(d => d.Products)
                .HasForeignKey(s => s.DepartmentId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}
