import { createContext, useContext, useState } from "react";

const BookingContext = createContext(undefined);

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const updateBookings = (values) => {
    const {date, time, guests, occasion} = values
    setBooking(prev=>({
      ...prev,
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    }))
  }

  console.log(booking)

  return (
    <BookingContext.Provider value={{ booking, setBooking, updateBookings }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
