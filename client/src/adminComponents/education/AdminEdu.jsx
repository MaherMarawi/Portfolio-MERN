import "./adminEdu.scss"
import { useQuery } from '@tanstack/react-query'
import { getEducation } from "../../api/educationApi"
import AdminAddEdu from "./AdminAddEdu";
import AdminDeleteEdu from "./AdminDeleteEdu";
import AdminEditEdu from "./AdminEditEdu";

const Edu = () => {

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["education"],
    queryFn: () => getEducation()
  });

  return (
    <div className="admin-edu" id="Education" >
      <div className="container">
        <span>Education</span>
        <div className="education">
          {data && data.map(edu => (
            <div className="one-education" key={edu._id}>
              <AdminEditEdu education={edu} />
              <AdminDeleteEdu id={edu._id} />
            </div>
          ))}
        </div>
        <AdminAddEdu />
      </div>
    </div>
  )
}

export default Edu