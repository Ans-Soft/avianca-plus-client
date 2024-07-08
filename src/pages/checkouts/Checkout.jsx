/**
 * Checkout component for managing checkouts.
 * 
 * @component
 */
import React, { useState, useEffect } from 'react';
import { createCheckout, getCheckouts, deleteCheckout, updateCheckout } from '../../services/api-checkouts'; 
import EditCheckout from './checkout_edit/CheckoutEdit'; 
import './styles-checkout.css'; 
import CheckoutForm from './checkout_form/CheckoutForm'; 
import CheckoutList from './checkout_list/CheckoutList'; 
import Menu from '../../components/menu/Menu'; 

/**
 * Checkout component functional definition.
 * 
 * @returns {JSX.Element} JSX element containing the checkout management interface.
 */
const Checkout = () => { 
    const [checkouts, setCheckouts] = useState([]); 
    const [error, setError] = useState(null);
    const [newCheckout, setNewCheckout] = useState({ 
        user_id: '',
        flight_start_id: '',
        flight_end_id: '',
        vuelo_id: '',
        hotel_id: '',
        start_date: '',
        end_date: '',
        payments: [],
        linked_checkouts: [] 
    });
    const [editingCheckout, setEditingCheckout] = useState(null);

    useEffect(() => {
        fetchCheckouts();
    }, []);

    /**
     * Fetches all checkouts from the server.
     */
    const fetchCheckouts = async () => {
        try {
            const result = await getCheckouts();
            setCheckouts(result);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Handles creation of a new checkout.
     */
    const handleCreateCheckout = async () => {
        try {
            const createdCheckout = await createCheckout(newCheckout);
            setCheckouts([...checkouts, createdCheckout]);
            setNewCheckout({
                user_id: '',
                flight_start_id: '',
                flight_end_id: '',
                client_id: 0,
                hotel_id: 301,
                start_date: '',
                end_date: '',
                payments: [],
                linked_checkouts: []
            });
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Handles deletion of a checkout by ID.
     * 
     * @param {number} id - ID of the checkout to delete.
     */
    const handleDeleteCheckout = async (id) => {
        try {
            await deleteCheckout(id);
            const updatedCheckouts = checkouts.filter(checkout => checkout.id !== id);
            setCheckouts(updatedCheckouts);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Sets the checkout to edit by ID.
     * 
     * @param {number} id - ID of the checkout to edit.
     */
    const handleEditCheckout = (id) => {
        const checkoutToEdit = checkouts.find(checkout => checkout.id === id);
        setEditingCheckout(checkoutToEdit);
    };

    /**
     * Handles saving edited checkout.
     * 
     * @param {object} editedCheckout - Updated checkout object to save.
     */
    const handleSaveEditedCheckout = async (editedCheckout) => {
        try {
            const updatedCheckout = await updateCheckout(editedCheckout.id, editedCheckout);
            const updatedCheckouts = checkouts.map(checkout =>
                checkout.id === updatedCheckout.id ? updatedCheckout : checkout
            );
            setCheckouts(updatedCheckouts);
            setEditingCheckout(null);
        } catch (error) {
            setError(error.message);
        }
    };

    /**
     * Cancels the editing of checkout.
     */
    const handleCancelEdit = () => {
        setEditingCheckout(null);
    };

    /**
     * Handles input change for new checkout creation.
     * 
     * @param {Object} e - Event object containing the input change.
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCheckout({ ...newCheckout, [name]: value });
    };

    return (
        <>
            <Menu />
            <div className="checkout-container"> 
                <h1>Checkouts</h1> 
                
                <CheckoutForm 
                    newCheckout={newCheckout} 
                    onInputChange={handleInputChange}
                    onCreateCheckout={handleCreateCheckout} 
                />
                <CheckoutList 
                    checkouts={checkouts} 
                    onEditCheckout={handleEditCheckout} 
                    onDeleteCheckout={handleDeleteCheckout} 
                />
                {editingCheckout && (
                    <EditCheckout 
                        checkout={editingCheckout} 
                        onSave={handleSaveEditedCheckout} 
                        onCancel={handleCancelEdit}
                    />
                )}
            </div>
        </>
    );
};

export default Checkout;
