import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import NotFound from "../pages/not_found/NotFound";
import Booking from "../pages/booking/Booking";

export default function RoutesAviancaPlus() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the login page */}
        <Route path="/" element={<Home />} />

        {/* Route for handling unknown URLs */}
        <Route path="*" element={<NotFound />} />

        {/* Route for the booking page */}
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  )
}