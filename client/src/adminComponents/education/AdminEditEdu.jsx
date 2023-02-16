import { useState } from 'react'
import { updateEducation } from '../../api/educationApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Loader from "../../loader/Loader"

const AdminEditEdu = ({ education }) => {

    const queryClient = useQueryClient()
    const [editEdu, setEditEdu] = useState("")

    const editEducationMutation = useMutation({
        mutationFn: education => updateEducation(education._id, education),
        onSuccess: () => {
            queryClient.invalidateQueries(["education"])
        }
    })

    const handleChange = (e) => {
        setEditEdu({ ...editEdu, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        const e = education
        if (editEdu.name) e.name = editEdu.name
        if (editEdu.description) e.description = editEdu.description
        if (editEdu.timeline) e.timeline = editEdu.timeline
        if (editEdu.place) e.place = editEdu.place
        console.log(e)
        editEducationMutation.mutate(e)
    }
    return (
        <div>
            <input defaultValue={education.timeline} name="timeline" onChange={handleChange} disabled={editEducationMutation.isLoading} />
            <input defaultValue={education.name} name="name" onChange={handleChange} disabled={editEducationMutation.isLoading} />
            <input defaultValue={education.place} name="place" onChange={handleChange} disabled={editEducationMutation.isLoading} />
            <input defaultValue={education.description} name="description" onChange={handleChange} disabled={editEducationMutation.isLoading} />
            <button disabled={editEducationMutation.isLoading} onClick={() => handleSubmit()} >{editEducationMutation.isLoading ? <Loader /> : "Edit"}</button>
        </div>
    )
}

export default AdminEditEdu