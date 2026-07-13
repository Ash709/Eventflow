import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import SeatSelection from "./pages/SeatSelection";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Tickets from "./pages/Tickets";
import ThankYou from "./pages/ThankYou";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/seat-selection/:id" element={<SeatSelection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;