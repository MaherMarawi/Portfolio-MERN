import axios from "axios"

export const makeRequest = axios.create({
    baseURL: "https://portfolio-backend-c3k1.onrender.com/api/",
    withCredenials: true,
})