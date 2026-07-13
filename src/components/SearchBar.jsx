function SearchBar() {
  return (
    <div className="max-w-4xl mx-auto mt-10 mb-16 px-6">
      <input
        type="text"
        placeholder="Search events..."
        className="w-full p-4 rounded-lg border border-gray-300 text-white"
      />

    </div>
  );
}

export default SearchBar;