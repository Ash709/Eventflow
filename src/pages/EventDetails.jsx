import { useParams, Link } from "react-router-dom";
import events from "../data/events";

function EventDetails() {
  const { id } = useParams();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <div className="text-center py-20 text-2xl">
        Event not found.
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[450px] object-cover rounded-xl"
      />

      <h1 className="text-5xl font-bold mt-8">
        {event.title}
      </h1>

      <p className="mt-4 text-xl">
        📍 {event.city}
      </p>

      <p className="mt-2 text-xl">
        📅 {event.date}
      </p>

      <p className="mt-2 text-3xl font-bold text-green-500">
        ₹{event.price}
      </p>

      <Link
        to={`/seat-selection/${event.id}`}
        className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-white"
      >
        Select Seats
      </Link>

    </section>
  );
}

export default EventDetails;