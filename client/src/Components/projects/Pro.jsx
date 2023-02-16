import "./pro.scss"
import projectImageDark from "../../images/4.jpg"
import projectImageLight from "../../images/1.jpg"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { useQuery } from '@tanstack/react-query'
import { getProjects } from "../../api/projectsApi.js"

const Pro = () => {

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getProjects()
  });
  const { darkMode } = useContext(DarkModeContext)

  if (error) return <h1>{error.message}</h1>

  return (
    <div className="pro" id="Projects">
      <div className="container">
        <span>Projects</span>
        <div className="projects">
          {data && data.map(project => (
            <div className="project" key={project._id}>
              <span>{project.name}</span>
              {/* <img src={`${imageUrl}${project.projectImage}`} onError={(e) => { e.target.onerror = null; e.target.src = altImg }}></img> */}
              <img src={darkMode ? projectImageDark : projectImageLight} />
              <div className="project-info" >
                <p>{project.description}</p>
                <label>{project.usedFramework}</label>
                <button><a target="_Blank" rel="noreferrer" href={project.url}>project link</a></button>
                <button><a target="_Blank" rel="noreferrer" href={project.codeUrl}> repository link</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Pro