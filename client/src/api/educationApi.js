import axios from "axios"
import url from "../url"

const makeRequest = axios.create({
    baseURL: url
})

export const getEducation = async () => {
    return await makeRequest.get("/getEducation").then(res => res.data)
} 

export const addEducation = async (education) => {
    return await makeRequest.post("/addEducation", education).then(res => res.data)
} 

export const updateEducation = async (id, education) => {
    return await makeRequest.put(`/updateEducation/${id}`, education).then(res => res.data)
}

export const deleteEducation = async (id) => {
    return await makeRequest.delete(`/deleteEducation/${id}`).then(res => res.data)
} 