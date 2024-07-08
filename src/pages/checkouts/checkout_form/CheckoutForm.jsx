import React from 'react';
import './styles-checkout-form.css';

const CheckoutForm = ({ newCheckout, onInputChange, onCreateCheckout }) => {
    return (
        <div className="checkout-form"> {/* Aplica la clase 'checkout-form' para los estilos */}
            <h2>Create a new checkout</h2>
            <input
                type="text"
                name="user_id"
                placeholder="User ID"
                value={newCheckout.user_id}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <input
                type="text"
                name="flight_start_id"
                placeholder="Flight Start ID"
                value={newCheckout.flight_start_id}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <input
                type="text"
                name="flight_end_id"
                placeholder="Flight End ID"
                value={newCheckout.flight_end_id}
                onChange={onInputChange}
                className="checkout-input"
            />
            <input
                type="text"
                name="vuelo_id"
                placeholder="Vuelo ID"
                value={newCheckout.vuelo_id}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <input
                type="text"
                name="hotel_id"
                placeholder="Hotel ID"
                value={newCheckout.hotel_id}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <input
                type="date"
                name="start_date"
                value={newCheckout.start_date}
                onChange={onInputChange}
                className="checkout-input" 
            />
            <input
                type="date"
                name="end_date"
                value={newCheckout.end_date}
                onChange={onInputChange}
                className="checkout-input"
            />
            <button onClick={onCreateCheckout} className="checkout-button">Create Checkout</button> {/* Aplica la clase 'checkout-button' para los estilos */}
        </div>
    );
};

export default CheckoutForm;
