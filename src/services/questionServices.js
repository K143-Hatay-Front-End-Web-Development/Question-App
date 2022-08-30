import { client, clientURL } from "../constants/axios"

export const setQuestionService = async data => {
    try {
        const res = await client.post(clientURL.question, data);
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


export const getQuestionService = async () => {
    try {
        const res = await client.get(clientURL.question);
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
export const updateQuestionService = async (data) => {
    try {
        const res = await client.put(clientURL.question + '/' + data.id, {data});
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