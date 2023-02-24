import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";


import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Booking = lazy(() => import("./pages/Booking"));
const BookingConfirmed = lazy(() => import("./pages/BookingConfirmed"));
const Menu = lazy(() => import("./pages/Menu"));
const Order = lazy(() => import("./pages/Order"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmed" element={<BookingConfirmed />} />
          <Route path="/online-menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
