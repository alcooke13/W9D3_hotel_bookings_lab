import { useState } from "react";
import { postBooking } from "../HotelService";

const BookingForm = ({addBooking}) => {

    const [bookingDetails, setBookingDetails] = useState({name: "", email: "", checkin_status: "checked-out"})

    const onChange = (evt) => {
        const newFormData = Object.assign({}, bookingDetails);
        newFormData[evt.target.name] = evt.target.value
        setBookingDetails(newFormData)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (!bookingDetails.name || !bookingDetails.email) {
            return;
        }else {postBooking(bookingDetails)
            .then(data => {
                addBooking(data)
            });
            setBookingDetails(
                {name: "",
                email: "",
                checkin_status: ""}
            )
        }};
        
        

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
                value={bookingDetails.name} 
                required/>
        </div>
        <div className="formWrap">
            <label htmlFor="email">Email:</label>
            <input 
                onChange={onChange} 
                type="email" 
                id="email" 
                name="email"
                value={bookingDetails.email} 
                required/>
        </div>
        <div className="formWrap">
            <p>Select Checkin Status:</p>
            <label htmlFor="checked-in" value="checked-in">Checked-In</label>
            <input 
                onChange={onChange} 
                type="radio" 
                id="checked-in" 
                name="checkin_status" 
                value="checked-in"/>

            <label htmlFor="checked-out" value="checked-out">Checked-Out</label>
            <input 
                onChange={onChange} 
                type="radio" 
                id="checked-out" 
                name="checkin_status" 
                value="checked-out"
                checked
                />
        </div>
        
        <input type="submit" value="Save" id="save"/>
    </form>
    );
};
export default BookingForm;