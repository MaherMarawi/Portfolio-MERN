import axios from "axios"
import url from "../url"

const makeRequest = axios.create({
    baseURL: url
})

export const getUser = async (id) => {
    return await makeRequest.get(`/getUser/${id}`).then(res => res.data)
}

export const updateUser = async (id, user) => {
    return await makeRequest.put(`/updateUser/${id}`, user).then(res => res.data)
}

export const getAbout = async (id) => {
    return await makeRequest.get(`/getAbout/${id}`).then(res => res.data)
} 

export const updateAbout = async (id, about) => {
    return await makeRequest.put(`/updateAbout/${id}`, about).then(res => res.data)
} 
