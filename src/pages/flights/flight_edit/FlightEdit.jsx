import React, { useState } from 'react';
import './styles-flight-edit.css';

const FlightEdit = ({ flight, onSave, onCancel }) => {
    const [editedFlight, setEditedFlight] = useState(flight);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedFlight({ ...editedFlight, [name]: value });
    };

    const handleSave = () => {
        onSave(editedFlight);
    };

    return (
        <div className="edit-checkout-form">
            <h2>Change Flight</h2>
            <label>Start date:</label>
            <input
                type="date"
                name="start_date"
                value={editedFlight.start_date}
                onChange={handleInputChange}
            />
            <label>End date:</label>
            <input
                type="date"
                name="end_date"
                value={editedFlight.end_date}
                onChange={handleInputChange}
            />
            <label>Start address flight:</label>
            <input
                type="text"
                name="start_address"
                value={editedFlight.start_address}
                onChange={handleInputChange}
            />
            <label>End address flight:</label>
            <input
                type="text"
                name="end_address"
                value={editedFlight.end_address}
                onChange={handleInputChange}
            />
            <label>Capacity flight:</label>
            <input
                type="text"
                name="capacity"
                value={editedFlight.capacity}
                onChange={handleInputChange}
            />
        
            <div className="edit-checkout-buttons">
                <button onClick={handleSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default FlightEdit;
