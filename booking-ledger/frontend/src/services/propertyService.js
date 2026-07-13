import { apiClient } from "../apiClient"

export const getProperties = {
    getAllProperties: async () => {
        try{
            const response = await apiClient.get("properties/");
            return response.data;
        }catch(e){
            console.error("Error fetching properties", error);
            throw error;
        }
    },
    bookProperty: async (propertyId, guestId) => {
        try {
            const response = await apiClient.post(`properties/${propertyId}/book_property/`, {
                guest_id:guestId
            });
            return response.data;
        } catch (error) {
            console.error("Error booking properties", error);
            throw error;
        }
    },
    cancelBooking: async (propertyId) => {
        try {
                const response = await apiClient.post(`properties/${propertyId}/cancel_booking/`, {
            });
            return response.data;
        } catch (error) {
            console.error("Error cancelling booking", error);
            throw error;
        }
    }
    
}