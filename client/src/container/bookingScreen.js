import BookingForm from "../components/bookingForm";
import BookingList from "../components/bookingList";
import {useState, useEffect} from 'react'
import { getBookings, postBooking, deleteBooking } from "../HotelService";


const BookingScreen = () => {
    const [bookings, setBookings] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
       const findBookings = async () => {
        const bookngsFound = await getBookings();
        setBookings(bookngsFound);
        setLoaded(true);
       } 
       findBookings();
      

    }, [loaded]);

    return (
        <>
        <h1>Booking Screen</h1>
        <BookingForm />
        {!loaded ?
        <p>loading</p> : 
    
        <BookingList bookings={bookings}/>}
        </>
    );
};
export default BookingScreen;