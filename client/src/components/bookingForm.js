import { useState } from "react";
import { postBooking } from "../HotelService";

const BookingForm = ({addBooking}) => {

    const [bookingDetails, setBookingDetails] = useState({name: "", email: "", checkin_status: false})

    const onChange = (evt) => {
        const newFormData = Object.assign({}, bookingDetails);
        newFormData[evt.target.name] = evt.target.value
        setBookingDetails(newFormData)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        postBooking(bookingDetails)
        .then(data => {
            addBooking(data)
        });
        setBookingDetails(
            {name: "",
            email: "",
            checkin_status: false}
        )
    };

    return (
        <form onSubmit={onSubmit} id="bookings-form" >
        <h2>Add a booking</h2>
        <div className="formWrap">
            <label htmlFor="name">Name:</label>
            <input 
                onChange={onChange} 
                type="text" 
                id="name" 
                name="name"
                value={bookingDetails.name} />
        </div>
        <div className="formWrap">
            <label htmlFor="email">Email:</label>
            <input 
                onChange={onChange} 
                type="email" 
                id="email" 
                name="email"
                value={bookingDetails.email} />
        </div>
        <div className="formWrap">
            <label htmlFor="checkin-status">Checkin Status:</label>
            <input 
                onChange={onChange} 
                type="text" 
                id="checkin-status" 
                name="checkin_status" 
                value={bookingDetails.checkin_status}/>
        </div>

        <input type="submit" value="Save" id="save"/>
    </form>
    );
};
export default BookingForm;