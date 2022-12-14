import BookingCard from "./bookingCard";

const BookingList = ({bookings}) => {

    const listOfBookings = bookings.map((booking, index) => {
        return (
            <BookingCard key={index} booking={booking} />
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