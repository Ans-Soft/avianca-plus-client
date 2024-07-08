const baseURL = ' http://127.0.0.1:45001'; // Cambia esto por la URL de tu servicio Flask de vuelos

// Function to create a flight
export async function createFlight(data) {
    try {
        const response = await fetch(`${baseURL}/api/v1/flight`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Flight created:', result);
            return result;
        } else {
            console.error('Error creating flight:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get all flights
export async function getFlights() {
    try {
        const response = await fetch(`${baseURL}/api/v1/flight`);
        const result = await response.json();
        if (response.ok) {
            console.log('Flights:', result);
            return result;
        } else {
            console.error('Error fetching flights:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get a flight by ID
export async function getFlight(id) {
    try {
        const response = await fetch(`${baseURL}/api/v1/flight/${id}`);
        const result = await response.json();
        if (response.ok) {
            console.log('Flight:', result);
            return result;
        } else {
            console.error('Error fetching flight:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to update a flight
export async function updateFlight(id, data) {
    try {
        const response = await fetch(`${baseURL}/api/v1/flight/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Flight updated:', result);
            return result;
        } else {
            console.error('Error updating flight:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to delete a flight
export async function deleteFlight(id) {
    try {
        const response = await fetch(`${baseURL}/api/v1/flight/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Flight deleted:', result);
            return result;
        } else {
            console.error('Error deleting flight:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}
