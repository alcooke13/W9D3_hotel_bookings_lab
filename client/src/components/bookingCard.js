import styled from 'styled-components'

const BookingDetails = styled.div`
    display: flex;
    flex-direction: column;


`



const BookingCard = ({booking}) => {

    return (
        <BookingDetails>
            <span>{booking.name}</span>
            <span>{booking.email}</span>
            <span>{booking.checkin_status}</span>
        </BookingDetails>
      
        
    );
};
export default BookingCard;