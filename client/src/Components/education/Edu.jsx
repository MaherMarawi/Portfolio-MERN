import "./edu.scss"
import {
  useQuery,
} from '@tanstack/react-query'
import { getEducation } from "../../api/educationApi"

const Edu = () => {

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["education"],
    queryFn: () => getEducation()
  });


  return (
    <div className="edu" id="Education" >
      <div className="container">
        <span>Education</span>
        <div className="education">
          {data && data.map(edu => (
            <div className="one-education" key={edu._id}>
              <div className="one-education-info">
                <div className="info">
                  <label>{edu.timeline}</label>
                  <label>{edu.place}</label>
                </div>
                <span>{edu.name}</span>
              </div>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Edu