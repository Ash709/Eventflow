function Hero() {
  return (
    <section className="bg-slate-900 text-white py-24">
      <div className="max-w-6xl mx-auto text-center px-6">

        <h1 className="text-6xl font-bold mb-6">
          Discover Amazing Events
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          Book tickets for concerts, sports, stand-up comedy,
          workshops and much more.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold">
          Explore Events
        </button>

      </div>
    </section>
  );
}

export default Hero;