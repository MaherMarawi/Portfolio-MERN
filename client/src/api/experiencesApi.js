import axios from "axios"
import url from "../url"

const makeRequest = axios.create({
    baseURL: url
})

export const getExperiences = async () => {
    return await makeRequest.get("/getExperiences").then(res => res.data)
} 

export const addExperience = async (experience) => {
    return await makeRequest.post("/postExperience", experience).then(res => res.data)
} 

export const updateExperience = async (id, experience) => {
    return await makeRequest.put(`/updateExperience/${id}`, experience).then(res => res.data)
} 

export const deleteExperience = async (id) => {
    return await makeRequest.delete(`/deleteExperience/${id}`).then(res => res.data)
} 