import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/not_found/NotFound";
import Checkout from "../pages/checkouts/Checkout";
import Flight from "../pages/flights/Flight";
import Hotel from "../pages/hotels/Hotel";

export default function RoutesAviancaPlus() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Home />} />

        {/* Route for handling unknown URLs */}
        <Route path="*" element={<NotFound />} />

        {/* Route for the checkouts page */}
        <Route path="/checkouts" element={<Checkout />} />
        <Route path="/flights" element={<Flight />} />
        <Route path="/hotels" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  )
}