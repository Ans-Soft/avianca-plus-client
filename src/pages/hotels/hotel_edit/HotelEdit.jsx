import React, { useState } from 'react';
import './styles-hotel-edit.css';

const HotelEdit = ({ hotel, onSave, onCancel }) => {
    const [editedHotel, setEditedHotel] = useState(hotel);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedHotel({ ...editedHotel, [name]: value });
    };

    const handleSave = () => {
        onSave(editedHotel);
    };

    return (
        <div className="edit-checkout-form">
            <h2>Change hotel reservation</h2>
            <label>Hotel name:</label>
            <input
                type="text"
                name="name"
                value={editedHotel.name}
                onChange={handleInputChange}
            />
            <label>Hotel address:</label>
            <input
                type="text"
                name="address"
                value={editedHotel.address}
                onChange={handleInputChange}
            />
            <label>Hotel reservation capacity:</label>
            <input
                type="text"
                name="capacity"
                value={editedHotel.capacity}
                onChange={handleInputChange}
            />
        
            <div className="edit-checkout-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default HotelEdit;
