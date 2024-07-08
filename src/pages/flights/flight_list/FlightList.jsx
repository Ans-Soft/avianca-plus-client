import React from 'react';
import './styles-flight-list.css';

const FlightList = ({ flights, onEditFlight, onDeleteFlight }) => {
    return (
        <div className="checkout-list">
            <h2>Existing Flights</h2>
            <table>
                <thead>
                    <tr>
                        <th>Start date</th>
                        <th>End date</th>
                        <th>Start address</th>
                        <th>End address</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map(flight => (
                        <tr key={flight.id}>
                            <td>{flight.start_date}</td>
                            <td>{flight.end_date}</td>
                            <td>{flight.start_address}</td>
                            <td>{flight.end_address}</td>
                            <td>
                                <button className="edit-button" onClick={() => onEditFlight(flight.id)}>Edit</button>
                                <button className="delete-button" onClick={() => onDeleteFlight(flight.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FlightList;
