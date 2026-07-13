import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedEvents from "../components/FeaturedEvents";

function Events() {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="max-w-7xl mx-auto py-12 px-6">

        <h1 className="text-5xl font-bold text-center mb-10 text-gray-900">
  Explore Events
</h1>

        <SearchBar />

        <Categories />

        <FeaturedEvents />

      </div>

    </div>
  );
}

export default Events;