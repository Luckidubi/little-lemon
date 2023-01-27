import {useState} from 'react'
import { fetchAPI } from '../api/BookingApi';
import BookingForm from '../components/BookingForm/BookingForm'

function Booking() {
  const [availableTimes, setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"]);

  const updateTimes = (date) => {
    // logic to update available times based on selected date
    const updatedTimes = fetchAPI(date);
    setAvailableTimes(updatedTimes);
  }
  return (
    <>
   <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
    </>
  )
}

export default Booking