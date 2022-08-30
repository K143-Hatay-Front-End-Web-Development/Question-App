import { client, clientURL } from "../constants/axios"

export const loginService = async (data) => {
    try {
        const res = await client.post(clientURL.login, data);
        return {
            code: res.status,
            status: true,
            data: res.data
        }
    
    }
    catch (error) {
        return {
            code: error.status,
            status: false,
            message: error.response.data.error.message
        }
    }
}
