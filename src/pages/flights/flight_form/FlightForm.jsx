import React from 'react';
import './styles-flight-form.css';

const FlightForm = ({ newFlight, onInputChange, onCreateFlight }) => {
    return (
        <div className="checkout-form"> {/* Aplica la clase 'checkout-form' para los estilos */}
            <h2>Create a new flight</h2>
            <label>Start date:</label>
            <input
                type="date"
                name="start_date"
                value={newFlight.start_date}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <label>End date:</label>
            <input
                type="date"
                name="end_date"
                value={newFlight.end_date}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <label>Start address flight:</label>
            <input
                type="text"
                name="start_address"
                value={newFlight.start_address}
                onChange={onInputChange}
                className="checkout-input"
            />
            <label>End address flight:</label>
            <input
                type="text"
                name="end_address"
                value={newFlight.end_address}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <label>Capacity flight:</label>
            <input
                type="text"
                name="capacity"
                value={newFlight.capacity}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <button onClick={onCreateFlight} className="checkout-button">Create Flight</button> {/* Aplica la clase 'checkout-button' para los estilos */}
        </div>
    );
};

export default FlightForm;
