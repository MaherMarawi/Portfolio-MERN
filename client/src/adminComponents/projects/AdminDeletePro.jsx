import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProject } from '../../api/projectsApi'
import Loader from "../../loader/Loader"

const AdminDeletePro = ({ id }) => {
    const queryCLient = useQueryClient()

    const deleteProMutation = useMutation({
        mutationFn: id => deleteProject(id),
        onSuccess: () => {
            queryCLient.invalidateQueries(["projects"])
        }
    })

    const handleSubmit = () => {
        deleteProMutation.mutate(id)
    }
    return (
        <div>
            <button onClick={() => handleSubmit()} disabled={deleteProMutation.isLoading}>{deleteProMutation.isLoading ? <Loader /> : "Delete"}</button>
        </div>
    )
}

export default AdminDeletePro