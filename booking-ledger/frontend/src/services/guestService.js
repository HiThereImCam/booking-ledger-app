import { apiClient } from "../apiClient"

export const getGuests = {
    getAllProperties: async () => {
        try{
            const response = await apiClient.get("guests/");
            return response.data;
        }catch(e){
            console.error("Error fetching properties", error);
            throw error;
        }
    }
}