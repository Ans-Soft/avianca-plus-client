// api.js
const baseURL = 'http://127.0.0.1:36479'; // Change this to your Flask service URL

// Function to create a booking
export async function createBooking(data) {
    try {
        const response = await fetch(`${baseURL}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Booking created:', result);
            return result;
        } else {
            console.error('Error creating booking:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get all bookings
export async function getBookings() {
    try {
        const response = await fetch(`${baseURL}/bookings`);
        const result = await response.json();
        if (response.ok) {
            console.log('Bookings:', result);
            return result;
        } else {
            console.error('Error fetching bookings:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get a booking by ID
export async function getBooking(id) {
    try {
        const response = await fetch(`${baseURL}/bookings/${id}`);
        const result = await response.json();
        if (response.ok) {
            console.log('Booking:', result);
            return result;
        } else {
            console.error('Error fetching booking:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to update a booking
export async function updateBooking(id, data) {
    try {
        const response = await fetch(`${baseURL}/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Booking updated:', result);
            return result;
        } else {
            console.error('Error updating booking:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to delete a booking
export async function deleteBooking(id) {
    try {
        const response = await fetch(`${baseURL}/bookings/${id}`, {
            method: 'DELETE'
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Booking deleted:', result);
            return result;
        } else {
            console.error('Error deleting booking:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}
