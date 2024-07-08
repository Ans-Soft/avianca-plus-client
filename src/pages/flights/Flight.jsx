/**
 * Flight component for managing Flights.
 * 
 * @component
 */
import React, { useState, useEffect } from 'react';
import { createFlight, getFlights, deleteFlight, updateFlight } from '../../services/api-flights'; 
import './styles-flight.css'; 
import Menu from '../../components/menu/Menu'; 
import FlightForm from './flight_form/FlightForm';
import FlightList from './flight_list/FlightList';
import FlightEdit from './flight_edit/FlightEdit';

/**
 * Flight component functional definition.
 * 
 * @returns {JSX.Element} JSX element containing the Flight management interface.
 */
const Flight = () => { 
    const [flights, setFlights] = useState([]); 
    const [error, setError] = useState(null);
    const [newFlight, setNewFlight] = useState({ 
        start_date: '',
        end_date: '',
        start_address: '',
        end_address: '',
        capacity: ''
    });
    const [editingFlight, setEditingFlight] = useState(null);

    useEffect(() => {
        fetchFlights();
    }, []);

    /**
     * Fetches all Flights from the server.
     */
    const fetchFlights = async () => {
        try {
            const result = await getFlights();
            setFlights(result);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Handles creation of a new Flight.
     */
    const handleCreateFlight = async () => {
        try {
            const createdFlight = await createFlight(newFlight);
            setFlights([...flights, createdFlight]);
            setNewFlight({
                start_date: '',
                end_date: '',
                start_address: '',
                end_address: '',
                capacity: '',
            });
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Handles deletion of a Flight by ID.
     * 
     * @param {number} id - ID of the Flight to delete.
     */
    const handleDeleteFlight = async (id) => {
        try {
            await deleteFlight(id);
            const updatedFlights = flights.filter(flight => flight.id !== id);
            setFlights(updatedFlights);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Sets the Flight to edit by ID.
     * 
     * @param {number} id - ID of the Flight to edit.
     */
    const handleEditFlight = (id) => {
        const flightToEdit = flights.find(flight => flight.id === id);
        setEditingFlight(flightToEdit);
    };

    /**
     * Handles saving edited Flight.
     * 
     * @param {object} editedFlight - Updated Flight object to save.
     */
    const handleSaveEditedFlight = async (editedFlight) => {
        try {
            const updatedFlight = await updateFlight(editedFlight.id, editedFlight);
            const updatedFlights = flights.map(flight =>
                flight.id === updatedFlight.id ? updatedFlights : flight    
            );
            setFlights(updatedFlights);
            setEditingFlight(null);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Cancels the editing of Flight.
     */
    const handleCancelEdit = () => {
        setEditingFlight(null);
    };

    /**
     * Handles input change for new Flight creation.
     * 
     * @param {Object} e - Event object containing the input change.
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFlight({ ...newFlight, [name]: value });
    };

    return (
        <>
            <Menu />
            <div className="flight-container"> 
                <h1>Flights</h1> 
                
                <FlightForm 
                    newFlight={newFlight} 
                    onInputChange={handleInputChange}
                    onCreateFlight={handleCreateFlight} 
                />
                <FlightList 
                    flights={flights} 
                    onEditFlight={handleEditFlight} 
                    onDeleteFlight={handleDeleteFlight} 
                />
                {editingFlight && (
                    <FlightEdit 
                        flight={editingFlight} 
                        onSave={handleSaveEditedFlight} 
                        onCancel={handleCancelEdit}
                    />
                )}
            </div>
        </>
    );
};

export default Flight;
