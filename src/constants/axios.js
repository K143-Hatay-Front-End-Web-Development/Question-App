import axios from "axios";

export const baseURL = "http://localhost:1337/api";

export const client = axios.create({ baseURL });

export const clientURL = {
    login: '/auth/local',
    question: '/questions'
}