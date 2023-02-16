import { useState } from 'react'
import { addEducation } from '../../api/educationApi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Loader from "../../loader/Loader"
const AdminAddEdu = () => {

    const queryClient = useQueryClient()

    const [newEdu, setNewEdu] = useState()

    const addEducationMutation = useMutation({
        mutationFn: education => addEducation(education),
        onSuccess: () => {
            queryClient.invalidateQueries(["education"])
        }
    })

    const handleChange = (e) => {
        setNewEdu({ ...newEdu, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        console.log(newEdu)
        addEducationMutation.mutate(newEdu)
    }
    return (
        <div>
            <input placeholder='Time line' name="timeline" onChange={handleChange} disabled={addEducationMutation.isLoading} />
            <input placeholder='Name' name="name" onChange={handleChange} disabled={addEducationMutation.isLoading} />
            <input placeholder='Place' name="place" onChange={handleChange} disabled={addEducationMutation.isLoading} />
            <input placeholder='Description' name="description" onChange={handleChange} disabled={addEducationMutation.isLoading} />
            <button disabled={addEducationMutation.isLoading} onClick={() => handleSubmit()} >{addEducationMutation.isLoading ? <Loader /> : "Add"}</button>
        </div>
    )
}

export default AdminAddEdu