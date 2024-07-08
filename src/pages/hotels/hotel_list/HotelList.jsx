import React from 'react';
import './styles-hotel-list.css';

const HotelList = ({ hotels, onEditHotel, onDeleteHotel }) => {
    return (
        <div className="checkout-list">
            <h2>Existing hotel reservation</h2>
            <table>
                <thead>
                    <tr>
                        <th>Hotel name</th>
                        <th>Hotel address</th>
                        <th>Hotel reservation capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {hotels.map(hotel => (
                        <tr key={hotel.id}>
                            <td>{hotel.name}</td>
                            <td>{hotel.address}</td>
                            <td>{hotel.capacity}</td>
                            <td>
                                <button className="edit-button" onClick={() => onEditHotel(hotel.id)}>Edit</button>
                                <button className="delete-button" onClick={() => onDeleteHotel(hotel.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HotelList;
