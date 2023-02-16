import "./adminPro.scss"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { useQuery } from '@tanstack/react-query'
import { getProjects } from "../../api/projectsApi.js"
import AdminAddPro from "./AdminAddPro"
import AdminDeletePro from "./AdminDeletePro"
import AdminEditPro from "./AdminEditPro"


const AdminPro = () => {

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects()
  });
  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className="admin-pro" id="Projects">
      <div className="container">
        <span>Projects</span>
        <div className="projects">
          {data && data.map(project => (
            <div className="project" key={project._id}>
              <AdminEditPro project={project} />
              <AdminDeletePro id={project._id} />
            </div>
          ))}
        </div>
        <AdminAddPro />
      </div>
    </div>
  )
}

export default AdminPro