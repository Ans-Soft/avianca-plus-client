const baseURL = 'http://127.0.0.1:42299'; // Cambia esto por la URL de tu servicio Flask

// Function to create a checkout
export async function createCheckout(data) {
    try {
        const response = await fetch(`${baseURL}/api/v1/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Checkout created:', result);
            return result;
        } else {
            console.error('Error creating checkout:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get all checkouts
export async function getCheckouts() {
    try {
        const response = await fetch(`${baseURL}/api/v1/bookings`);
        const result = await response.json();
        if (response.ok) {
            console.log('Checkouts:', result);
            return result;
        } else {
            console.error('Error fetching checkouts:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to get a checkout by ID
export async function getCheckout(id) {
    try {
        const response = await fetch(`${baseURL}/api/v1/bookings/${id}`);
        const result = await response.json();
        if (response.ok) {
            console.log('Checkout:', result);
            return result;
        } else {
            console.error('Error fetching checkout:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to update a checkout
export async function updateCheckout(id, data) {
    try {
        const response = await fetch(`${baseURL}/api/v1/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Checkout updated:', result);
            return result;
        } else {
            console.error('Error updating checkout:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}

// Function to delete a checkout
export async function deleteCheckout(id) {
    try {
        const response = await fetch(`${baseURL}/api/v1/bookings/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            // Puede que necesites enviar algún cuerpo en la solicitud DELETE según los requisitos del servidor
            // body: JSON.stringify({ client_id: 'example-client-id' })
        });
        const result = await response.json();
        if (response.ok) {
            console.log('Checkout deleted:', result);
            return result;
        } else {
            console.error('Error deleting checkout:', result);
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Request error:', error);
        throw error;
    }
}
