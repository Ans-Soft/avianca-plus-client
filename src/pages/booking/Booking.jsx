// Booking.js
import React, { useState, useEffect } from 'react';
import { createBooking, getBookings, getBooking, updateBooking, deleteBooking } from '../../services/api-booking';

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState(null);
    const [newBooking, setNewBooking] = useState({
        user_id: '',
        flight_start_id: '',
        flight_end_id: '',
        client_id: 0,
        hotel_id: 301,
        start_date: '',
        end_date: '',
        payments: [],
        linked_bookings: []
    });

    useEffect(() => {
        async function fetchBookings() {
            try {
                const result = await getBookings();
                setBookings(result);
            } catch (error) {
                setError(error.message);
            }
        }
        fetchBookings();
    }, []);

    const handleCreateBooking = async () => {
        try {
            const createdBooking = await createBooking(newBooking);
            setBookings([...bookings, createdBooking]);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBooking({ ...newBooking, [name]: value });
    };

    return (
        <div>
            <h1>Bookings</h1>
            {error && <p>Error: {error}</p>}
            <div>
                <h2>Create a new booking</h2>
                <input
                    type="text"
                    name="user_id"
                    placeholder="User ID"
                    value={newBooking.user_id}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="flight_start_id"
                    placeholder="Flight Start ID"
                    value={newBooking.flight_start_id}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="flight_end_id"
                    placeholder="Flight End ID"
                    value={newBooking.flight_end_id}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="hotel_id"
                    placeholder="Hotel ID"
                    value={newBooking.hotel_id}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="start_date"
                    value={newBooking.start_date}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="end_date"
                    value={newBooking.end_date}
                    onChange={handleInputChange}
                />
                <button onClick={handleCreateBooking}>Create Booking</button>
            </div>
            <h2>Existing Bookings</h2>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        {booking.user_id} - {booking.start_date} to {booking.end_date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Booking;
