function CategoryCard({ icon, name }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-xl hover:-translate-y-2 transition duration-300">

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {name}
      </h3>

    </div>
  );
}

export default CategoryCard;