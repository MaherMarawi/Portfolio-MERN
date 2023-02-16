import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postProject } from '../../api/projectsApi'
import Loader from '../../loader/Loader'
const AdminAddPro = () => {
    const queryCLient = useQueryClient()
    const [ project, setProject ] = useState()

    const addProjectMutation = useMutation({
        mutationFn: project => postProject(project),
        onSuccess: () => {
            queryCLient.invalidateQueries(["projects"])
            setProject("")
        }
    })

    const handleChange = (e) => {
        setProject({...project, [e.target.name]: e.target.value})
    }
    const handleSubmit = () => {
        console.log(project)
        addProjectMutation.mutate(project)
    }

    return (
    <div>
        <input onChange={handleChange} name="name" placeholder="Name" />
        <input onChange={handleChange} name="description" placeholder="Description" />
        <input onChange={handleChange} name="usedFramework" placeholder="Framworks" />
        <input onChange={handleChange} name="url" placeholder="Project Link" />
        <input onChange={handleChange} name="codeUrl" placeholder="Code Link" />
        <button onClick={() => handleSubmit()}  disabled={addProjectMutation.isLoading}>{addProjectMutation.isLoading ? <Loader /> : "Add"}</button>
    </div>
  )
}

export default AdminAddPro