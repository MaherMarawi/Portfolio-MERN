import axios from "axios"
import url from "../url"

const makeRequest = axios.create({
    baseURL: url
})

export const getMainTitle = async (id) => {
    return await makeRequest.get(`/getMainTitle/${id}`).then(res => res.data)
} 

export const updateMainTitle = async (id, mainTitle) => {
    return await makeRequest.put(`/updateMainTitle/${id}`, mainTitle).then(res => res.data)
}