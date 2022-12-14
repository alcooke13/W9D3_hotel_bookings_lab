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
    //    console.log(bookings)

    }, [loaded]);


    const addBooking = (data) => {
        const newBookings = [...bookings]; 
        newBookings.push(data)
        setBookings(newBookings)
    }

    const removeBooking = (id) => {
        const newBookings = [...bookings];
        const index = newBookings.map(booking => booking._id).indexOf(id)
        newBookings.splice(index, 1)
        setBookings(newBookings)
    }

    return (
        <>
        <h1>Booking Screen</h1>
        <BookingForm addBooking={addBooking} />
        {!loaded ?
        <p>loading</p> : 
    
        <BookingList bookings={bookings} removeBooking={removeBooking}/>}
        </>
    );
};
export default BookingScreen;