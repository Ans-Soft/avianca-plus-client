const baseURL = 'http://127.0.0.1:44383'; // Cambia esto por la URL de tu servicio Flask de hoteles

// Function to create a hotel
export async function createHotel(data) {
    try {
        const response = await fetch(`${baseURL}/api/v1/hotel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Hotel created:', result);
            return result;
        } else {
            console.error('Error creating hotel:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get all hotels
export async function getHotels() {
    try {
        const response = await fetch(`${baseURL}/api/v1/hotel`);
        const result = await response.json();
        if (response.ok) {
            console.log('Hotels:', result);
            return result;
        } else {
            console.error('Error fetching hotels:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get a hotel by ID
export async function getHotel(id) {
    try {
        const response = await fetch(`${baseURL}/api/v1/hotel/${id}`);
        const result = await response.json();
        if (response.ok) {
            console.log('Hotel:', result);
            return result;
        } else {
            console.error('Error fetching hotel:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to update a hotel
export async function updateHotel(id, data) {
    try {
        const response = await fetch(`${baseURL}/api/v1/hotel/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Hotel updated:', result);
            return result;
        } else {
            console.error('Error updating hotel:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to delete a hotel
export async function deleteHotel(id) {
    try {
        const response = await fetch(`${baseURL}/api/v1/hotel/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Hotel deleted:', result);
            return result;
        } else {
            console.error('Error deleting hotel:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}
