import styled from 'styled-components'
import { deleteBooking } from '../HotelService';

const BookingDetails = styled.div`
    display: flex;
    flex-direction: column;


`



const BookingCard = ({booking, removeBooking}) => {

    const onDelete = () => {
        deleteBooking(booking._id)
        .then(() => {
            removeBooking(booking._id)}
        )

    }

    return (
        <BookingDetails>
            <span>{booking.name}</span>
            <span>{booking.email}</span>
            <span>{booking.checkin_status}</span>
            <button onClick={onDelete}>Delete</button>
        </BookingDetails>
      
        
    );
};
export default BookingCard;