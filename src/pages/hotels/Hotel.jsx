/**
 * Flight component for managing Flights.
 * 
 * @component
 */
import React, { useState, useEffect } from 'react';
import { createHotel, getHotels, deleteHotel, updateHotel } from '../../services/api-hotels'; 
import './styles-hotel.css'; 
import Menu from '../../components/menu/Menu'; 
import HotelForm from './hotel_form/HotelForm';
import HotelList from './hotel_list/HotelList';
import HotelEdit from './hotel_edit/HotelEdit';

/**
 * Flight component functional definition.
 * 
 * @returns {JSX.Element} JSX element containing the Flight management interface.
 */
const Hotel = () => { 
    const [hotels, setHotels] = useState([]); 
    const [error, setError] = useState(null);
    const [newHotel, setNewHotel] = useState({ 
        name: '',
        address: '',
        capacity: ''
    });
    const [editingHotel, setEditingHotel] = useState(null);

    useEffect(() => {
        fetchHotels();
    }, []);

    /**
     * Fetches all Hotels from the server.
     */
    const fetchHotels = async () => {
        try {
            const result = await getHotels();
            setHotels(result);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Handles creation of a new Hotel.
     */
    const handleCreateHotel = async () => {
        try {
            const createdHotel = await createHotel(newHotel);
            setHotels([...hotels, createdHotel]);
            setNewHotel({
                name: '',
                address: '',
                capacity: ''
            });
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Handles deletion of a Hotel by ID.
     * 
     * @param {number} id - ID of the Hotel to delete.
     */
    const handleDeleteHotel = async (id) => {
        try {
            await deleteHotel(id);
            const updatedHotels = hotels.filter(hotel => hotel.id !== id);
            setHotels(updatedHotels);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Sets the Hotel to edit by ID.
     * 
     * @param {number} id - ID of the Flight to edit.
     */
    const handleEditHotel = (id) => {
        const hotelToEdit = hotels.find(hotel => hotel.id === id);
        setEditingHotel(hotelToEdit);
    };

    /**
     * Handles saving edited Hotel.
     * 
     * @param {object} editedHotel - Updated Hotel object to save.
     */
    const handleSaveEditedHotel = async (editedHotel) => {
        try {
            const updatedHotel = await updateHotel(editedHotel.id, editedHotel);
            const updatedHotels = hotels.map(hotel =>
                hotel.id === updatedHotel.id ? updatedHotels : hotel    
            );
            setHotels(updatedHotels);
            setEditingHotel(null);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Cancels the editing of Hotel.
     */
    const handleCancelEdit = () => {
        setEditingHotel(null);
    };

    /**
     * Handles input change for new Hotel creation.
     * 
     * @param {Object} e - Event object containing the input change.
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewHotel({ ...newHotel, [name]: value });
    };

    return (
        <>
            <Menu />
            <div className="hotel-container"> 
                <h1>Hotels</h1> 
                <HotelForm 
                    newHotel={newHotel} 
                    onInputChange={handleInputChange}
                    onCreateHotel={handleCreateHotel} 
                />
                <HotelList 
                    hotels={hotels} 
                    onEditHotel={handleEditHotel} 
                    onDeleteHotel={handleDeleteHotel} 
                />
                {editingHotel && (
                    <HotelEdit 
                        hotel={editingHotel} 
                        onSave={handleSaveEditedHotel} 
                        onCancel={handleCancelEdit}
                    />
                )}
            </div>
        </>
    );
};

export default Hotel;
