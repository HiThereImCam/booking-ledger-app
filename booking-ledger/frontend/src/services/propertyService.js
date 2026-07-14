// interacts with property apis
import {apiClient} from "../apiClient"

export const propertyService = {
    getProperties: ( async () => {
        try{
            const response = await apiClient.get('/properties/');
            return response.data;
        }catch(e){
            console.error("Error fetching properties: ", e);
        }
    }),
    bookProperty: ( async(propertyId, guestId) => {
        try{
            const response = await apiClient.post(`/${propertyId}/book_property`,{
                guest_id: guestId
            });
            return response.data;
        }catch(e){
            console.error("Error fetching properties: ", e);
        }
    })
}