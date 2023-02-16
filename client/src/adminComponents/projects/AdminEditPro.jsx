import { useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import Loader from '../../loader/Loader'
import { updateProject } from '../../api/projectsApi'
const AdminEditPro = ({project}) => {
    const queryCLient = useQueryClient()
    const [editPro, setEditPro] = useState()

    const updateProMutation = useMutation({
        mutationFn: pro => updateProject(pro._id, pro),
        onSuccess: () => {
          queryCLient.invalidateQueries(["projects"])
          setEditPro("")
        }
      })
      const handleChange = (e) => {
        setEditPro({ ...editPro, [e.target.name]: e.target.value })
      }
      const handleSubmit = (id) => {
        const e = project
        if(editPro.name) e.name = editPro.name
        if(editPro.description) e.description = editPro.description
        if(editPro.usedFramework) e.usedFramework = editPro.usedFramework
        if(editPro.url) e.url = editPro.url
        if(editPro.codeUrl) e.codeUrl = editPro.codeUrl
        updateProMutation.mutate(e)
      }
    return (
        <div>
            <input onChange={handleChange} name="name" defaultValue={project.name} />
            <div className="project-info" >
                <input onChange={handleChange} name="description" defaultValue={project.description} />
                <input onChange={handleChange} name="usedFramework" defaultValue={project.usedFramework} />
                <input onChange={handleChange} name="url" defaultValue={project.url} />
                <input onChange={handleChange} name="codeUrl" defaultValue={project.codeUrl} />
                <button onClick={() => handleSubmit(project._id)}>{updateProMutation.isLoading ? <Loader /> : "Edit"}</button>
            </div>
        </div>
    )
}

export default AdminEditPro