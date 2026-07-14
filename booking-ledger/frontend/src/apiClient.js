const BASE_URL ='http://localhost:8000/api';

// is the whole method async?
// how would I make the call to the backend
// fetch
export const apiClient = {
    get: (async (endpoint) => {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        if (!response.ok){
            throw new Error(`HTTP Error! Status code - ${response.status}`)
        }
       
        return {data: await response.json()}
    }),

    // payload dependent
    // but it still needs a body
    post: (async(endpoint, payload) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (payload){
            options.body = JSON.stringify(payload)
        }
        const response = await fetch(`${BASE_URL}/${endpoint}`,options)
                if (!response.ok){
            throw new Error(`HTTP Error! Status code - ${response.status}`)
        }
       
        return {data: await response.json()}
    })
}