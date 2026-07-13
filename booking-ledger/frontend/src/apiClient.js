const BASE_URL ='http://localhost:8000/api';

export const apiClient = {
    get: async (endpoint) => {
        const response = await fetch(`${BASE_URL}/${endpoint}`,{
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        })

        if (!response.ok){
            throw new Error(`HTTP Error! Status Code: ${response.status}`)
        }

        return {data: await response.json()}
    },

    post: async (endpoint, payload) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            }
        }

        if (payload){
            options.body = JSON.stringify(payload)
        }

        const response = await fetch(`${BASE_URL}/${endpoint}`, options)

        if (!response.ok){
            throw new Error(`HTTP Error! Status Code: ${response.status}`)
        }

        return {data: await response.json()}
        
    }
}