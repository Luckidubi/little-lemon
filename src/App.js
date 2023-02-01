
import "./App.css"
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import BookingConfirmed from "./pages/BookingConfirmed";
import Menu from "./pages/Menu";
import Order from "./pages/Order";



function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/confirmed" element={<BookingConfirmed/>}/>
          <Route path="/online-menu" element={<Menu/>}/>
          <Route path="/order" element={<Order/>}/>

      </Route>
      </Routes>
    </>
  );
}

export default App;
