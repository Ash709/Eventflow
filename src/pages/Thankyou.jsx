import { useLocation, Link } from "react-router-dom";

function ThankYou() {
  const location = useLocation();

  const seats = location.state?.seats || [];

  const bookingId = "EVT" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">

        <div className="text-6xl mb-4">
          🎉
        </div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Booking Successful!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for booking with <strong>EventFlow</strong>.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 text-left space-y-3">

         <p className="text-gray-800">
  <strong>Booking ID:</strong> {bookingId}
</p>

<p className="text-gray-800">
  <strong>Seats:</strong> {seats.join(", ")}
</p>

<p className="text-gray-800">
  <strong>Total Tickets:</strong> {seats.length}
</p>

<p className="text-gray-800">
  <strong>Status:</strong>{" "}
  <span className="text-green-600 font-semibold">
    Confirmed
  </span>
</p>
        </div>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default ThankYou;