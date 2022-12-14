import BookingCard from "./bookingCard";

const BookingList = ({bookings, removeBooking}) => {

    const listOfBookings = bookings.map((booking, index) => {
        return (
            <BookingCard key={index} booking={booking} removeBooking={removeBooking} />
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