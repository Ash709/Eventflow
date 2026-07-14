import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <NavLink
          to="/"
          className="text-lg md:text-2xl font-bold text-blue-400"
        >
          EventFlow
        </NavLink>

        <ul className="flex gap-1 md:gap-8 text-xs md:text-base">

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/events">Events</NavLink>
          </li>

          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>

          <li>
            <NavLink to="/tickets">Tickets</NavLink>
          </li>

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
