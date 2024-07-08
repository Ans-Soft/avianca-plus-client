import React, { useState } from 'react';
import './styles-checkout-edit.css';

const EditCheckout = ({ checkout, onSave, onCancel }) => {
    const [editedCheckout, setEditedCheckout] = useState(checkout);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCheckout({ ...editedCheckout, [name]: value });
    };

    const handleSave = () => {
        onSave(editedCheckout);
    };

    return (
        <div className="edit-checkout-form">
            <h2>Edit Checkout</h2>
            <label>User ID:</label>
            <input
                type="text"
                name="user_id"
                value={editedCheckout.user_id}
                onChange={handleInputChange}
            />
            <label>Flight Start ID:</label>
            <input
                type="text"
                name="flight_start_id"
                value={editedCheckout.flight_start_id}
                onChange={handleInputChange}
            />
            <label>Flight End ID:</label>
            <input
                type="text"
                name="flight_end_id"
                value={editedCheckout.flight_end_id}
                onChange={handleInputChange}
            />
            <label>Hotel ID:</label>
            <input
                type="text"
                name="hotel_id"
                value={editedCheckout.hotel_id}
                onChange={handleInputChange}
            />
            <label>Start date:</label>
            <input
                type="date"
                name="start_date"
                value={editedCheckout.start_date}
                onChange={handleInputChange}
            />
            <label>End date:</label>
            <input
                type="date"
                name="end_date"
                value={editedCheckout.end_date}
                onChange={handleInputChange}
            />
            <div className="edit-checkout-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EditCheckout;
