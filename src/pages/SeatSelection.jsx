function SeatSelection() {
  return (
    <div className="max-w-5xl mx-auto py-16">

      <h1 className="text-5xl font-bold text-center mb-10">
        Select Seats
      </h1>

      <div className="bg-gray-200 rounded-lg h-8 w-96 mx-auto mb-10 text-center">
        SCREEN
      </div>

      <div className="grid grid-cols-8 gap-3 justify-center">

        {Array.from({ length: 40 }).map((_, index) => (
          <button
            key={index}
            className="w-10 h-10 rounded bg-green-500 hover:bg-green-600"
          >
            {index + 1}
          </button>
        ))}

      </div>

    </div>
  );
}

export default SeatSelection;