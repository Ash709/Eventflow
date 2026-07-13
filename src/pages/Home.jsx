import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedEvents from "../components/FeaturedEvents";

function Home() {
  return (
    <>
      <Hero />
      <SearchBar />
      <Categories />
      <FeaturedEvents />
    </>
  );
}

export default Home;