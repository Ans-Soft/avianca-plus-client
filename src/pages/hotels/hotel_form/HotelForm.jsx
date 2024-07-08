import React from 'react';
import './styles-hotel-form.css';

const HotelForm = ({ newHotel, onInputChange, onCreateHotel }) => {
    return (
        <div className="checkout-form"> {/* Aplica la clase 'checkout-form' para los estilos */}
            <h2>Create a new hotel reservation</h2>
            <label>Hotel name:</label>
            <input
                type="text"
                name="name"
                value={newHotel.name}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <label>Hotel address:</label>
            <input
                type="text"
                name="address"
                value={newHotel.address}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <label>Hotel reservation capacity:</label>
            <input
                type="text"
                name="capacity"
                value={newHotel.capacity}
                onChange={onInputChange}
                className="checkout-input"
            />
            
            <button onClick={onCreateHotel} className="checkout-button">Create hotel reservation</button> {/* Aplica la clase 'checkout-button' para los estilos */}
        </div>
    );
};

export default HotelForm;
