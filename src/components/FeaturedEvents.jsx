import events from "../data/events";
import EventCard from "./EventCard";

function FeaturedEvents() {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
          Featured Events
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedEvents;