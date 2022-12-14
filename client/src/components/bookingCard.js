import styled from 'styled-components'
import { deleteBooking } from '../HotelService';
import { updateBooking } from '../HotelService';

const BookingDetails = styled.div`
    display: flex;
    flex-direction: column;


`



const BookingCard = ({booking, removeBooking, changeBooking}) => {

    const onDelete = () => {
        deleteBooking(booking._id)
        .then(() => {
            removeBooking(booking._id)}
        )

    }

    const onChange = (evt) => {
        const newBooking = {
            name: booking.name,
            email: booking.email,
            checkin_status: evt.target.value,
        }
        updateBooking(newBooking, booking._id)
        .then(
            changeBooking(newBooking, booking._id)
        )
    }


    return (
        <BookingDetails>
            <span>{booking.name}</span>
            <span>{booking.email}</span>
            {booking.checkin_status === "checked-in" ?
      
            <div className="formWrap">
            <p>Select Checkin Status:</p>
            <label htmlFor="checked-in" value="checked-in">Checked-In</label>
            <input 
                onChange={onChange} 
                type="radio" 
                 
                name={booking._id} 
                value="checked-in"
                checked/>


            <label htmlFor="checked-out" value="checked-out">Checked-Out</label>
            <input 
                onChange={onChange} 
                type="radio" 
                
                name={booking._id} 
                value="checked-out"
                
                />
        </div>
:
<div className="formWrap">
            <p>Select Checkin Status:</p>
            <label htmlFor="checked-in" value="checked-in">Checked-In</label>
            <input 
                onChange={onChange} 
                type="radio" 
                
                name={booking._id} 
                value="checked-in"
                />


            <label htmlFor="checked-out" value="checked-out">Checked-Out</label>
            <input 
                onChange={onChange} 
                type="radio" 
                 
                name={booking._id} 
                value="checked-out"
                checked
                />
        </div>}

            <button onClick={onDelete}>Delete</button>
        </BookingDetails>
      
        
    );
};
export default BookingCard;