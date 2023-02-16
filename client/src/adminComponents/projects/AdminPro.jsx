import "./adminPro.scss"
import projectImageDark from "../../images/4.jpg"
import projectImageLight from "../../images/1.jpg"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query'
import { getProjects, updateProject } from "../../api/projectsApi.js"
import Loader from "../../loader/Loader"
import AdminAddPro from "./AdminAddPro"
import AdminDeletePro from "./AdminDeletePro"


const AdminPro = () => {
const queryCLient = useQueryClient()
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects()
  });
  const { darkMode } = useContext(DarkModeContext)
  
  const updateProMutation = useMutation({
    mutationFn: pro => updateProject(pro._id, pro),
    onSuccess: () => {
      queryCLient.invalidateQueries(["projects"])
    }
  })
  const handleChange = () => {

  }
  const handleSubmit = () => {

  }

  return (
    <div className="admin-pro" id="Projects">
      <div className="container">
        <span>Projects</span>
        <div className="projects">
          {data && data.map( project => (
            <div className="project" key={project._id}>
              <input onChange={handleChange} defaultValue={project.name} />
              {/* <img src={darkMode ? projectImageDark : projectImageLight} /> */}
              {/* <img src={`${imageUrl}${project.projectImage}`} onError={(e) => { e.target.onerror = null; e.target.src = altImg }}></img> */}
              <div className="project-info" >
                <input onChange={handleChange} defaultValue={project.description} />
                <input onChange={handleChange} defaultValue={project.usedFramework} />
                <input onChange={handleChange} defaultValue={project.url} />
                <input onChange={handleChange} defaultValue={project.codeUrl} />
                {/* <button><a target="_Blank" rel="noreferrer" href={project.url}>project link</a></button> */}
                {/* <button><a target="_Blank" rel="noreferrer" href={project.codeUrl}> repository link</a></button> */}
                <button onClick={() => handleSubmit()}>{updateProMutation.isLoading ? <Loader /> : "Edit"}</button>
                <AdminDeletePro id={project._id} />
              </div>
            </div>
          ))}
        </div>
        <AdminAddPro />
      </div>
    </div>
  )
}

export default AdminPro