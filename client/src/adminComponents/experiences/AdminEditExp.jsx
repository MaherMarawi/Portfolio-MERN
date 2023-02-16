import { useState } from 'react'
import Loader from "../../loader/Loader"
import { updateExperience } from "../../api/experiencesApi.js"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import "./adminExp.scss"

const AdminEditExp = ({ experience }) => {
    const queryClient = useQueryClient()
    const [editExp, setEditExp] = useState()

    const updateExperienceMutation = useMutation({
        mutationFn: exp => updateExperience(exp._id, exp),
        onSuccess: () => {
            queryClient.invalidateQueries(["experiences"])
            setEditExp("")
        }
    })

    const handleChange = (e) => {
        setEditExp({ ...editExp, [e.target.name]: e.target.value })
    }

    const handleSubmit = (id) => {
        const e = experience
        if (editExp.name) e.name = editExp.name
        if (editExp.grade) e.grade = editExp.grade
        updateExperienceMutation.mutate(e)
    }

    return (
        <div>
            <input defaultValue={experience.name} name="name" onChange={handleChange} />
            <input defaultValue={experience.grade} name="grade" onChange={handleChange} />
            <button disabled={updateExperienceMutation.isLoading} onClick={() => handleSubmit(experience._id)}>{updateExperienceMutation.isLoading ? <Loader /> : "Edit"}</button>
        </div>
    )
}

export default AdminEditExp