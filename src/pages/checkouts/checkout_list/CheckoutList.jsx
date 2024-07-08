import React from 'react';
import './styles-checkout-list.css';

const CheckoutList = ({ checkouts, onEditCheckout, onDeleteCheckout }) => {
    return (
        <div className="checkout-list">
            <h2>Existing Checkouts</h2>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {checkouts.map(checkout => (
                        <tr key={checkout.id}>
                            <td>{checkout.user_id}</td>
                            <td>{checkout.start_date}</td>
                            <td>{checkout.end_date}</td>
                            <td>
                                <button className="edit-button" onClick={() => onEditCheckout(checkout.id)}>Edit</button>
                                <button className="delete-button" onClick={() => onDeleteCheckout(checkout.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CheckoutList;
