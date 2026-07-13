import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SeatSelection() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const navigate = useNavigate();

  function handleSeatClick(seat) {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

  function handleBooking() {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    navigate("/thankyou", {
      state: {
        seats: selectedSeats,
      },
    });
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">

      <h1 className="text-5xl font-bold text-center mb-10">
        Select Seats
      </h1>

      <div className="bg-gray-300 rounded-lg h-8 w-96 mx-auto mb-12 flex items-center justify-center font-semibold">
        SCREEN
      </div>

      <div className="grid grid-cols-8 gap-3 justify-center max-w-md mx-auto">

        {Array.from({ length: 40 }).map((_, index) => {
          const seat = index + 1;

          return (
            <button
              key={seat}
              onClick={() => handleSeatClick(seat)}
              className={`w-10 h-10 rounded text-white font-semibold transition
                ${
                  selectedSeats.includes(seat)
                    ? "bg-blue-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
            >
              {seat}
            </button>
          );
        })}

      </div>

      <div className="text-center mt-10">

        <h2 className="text-xl font-semibold">
          Selected Seats:
        </h2>

        <p className="mt-2 text-gray-700">
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "No seats selected"}
        </p>

        <button
          onClick={handleBooking}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Confirm Booking
        </button>

      </div>

    </div>
  );
}

export default SeatSelection;