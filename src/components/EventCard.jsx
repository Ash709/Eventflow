import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <img
        src={event.image}
        alt={event.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <span className="text-sm text-blue-600 font-semibold">
          {event.category}
        </span>

        <h2 className="text-xl font-bold mt-2">
          {event.title}
        </h2>

        <p className="text-gray-600 mt-2">
          📍 {event.city}
        </p>

        <p className="text-gray-600">
          📅 {event.date}
        </p>

        <div className="flex justify-between items-center mt-5">

          <h3 className="text-2xl font-bold text-green-600">
            ₹{event.price}
          </h3>

          <Link 
            to={`/event/${event.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
          >
            Book Now
          </Link>

        </div>

      </div>

    </div>
  );
}

export default EventCard;