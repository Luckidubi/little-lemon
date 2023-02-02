import  { useEffect } from 'react'
import ConfirmedBooking from '../components/ConfirmedBooking/ConfirmedBooking'

function BookingConfirmed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
<ConfirmedBooking/>
    </>
  )
}

export default BookingConfirmed