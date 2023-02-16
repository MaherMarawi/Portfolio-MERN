import axios from "axios"
import url from "../url"

const makeRequest = axios.create({
    baseURL: url
})

export const getProjects = async () => {
    return await makeRequest.get("/getProjects").then(res => res.data)
} 

export const postProject = async (project) => {
    return await makeRequest.post("/postProject", project).then(res => res.data)
} 

export const updateProject = async (id, project) => {
    return await makeRequest.patch(`/updateProject/${id}`, project).then(res => res.data)
}

export const deleteProject = async (id) => {
    return await makeRequest.delete(`/deleteProject/${id}`).then(res => res.data)
} 