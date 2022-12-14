import BookingCard from "./bookingCard";

const BookingList = ({bookings, removeBooking, changeBooking}) => {

    const listOfBookings = bookings.map((booking, index) => {
        return (
            <BookingCard key={index} booking={booking} removeBooking={removeBooking} changeBooking={changeBooking}/>
        )
    })

    return (
       <> 
       <ul>
        {listOfBookings}
       </ul>
        </>
    );
};
export default BookingList;