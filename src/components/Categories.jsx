import CategoryCard from "./CategoryCard";
import Categories from "../data/Categories";

function Categories() {
  return (
    <section className="py-16 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
  Browse Categories
</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              name={category.name}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;