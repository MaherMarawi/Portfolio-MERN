import "./adminExp.scss"
import { useQuery } from '@tanstack/react-query'
import { getExperiences } from "../../api/experiencesApi.js"
import AdminDeleteExp from "./AdminDeleteExp"
import AdminAddExp from "./AdminAddExp"
import AdminEditExp from "./AdminEditExp"

const AdminExp = () => {
  
  const {
    isLoading,
    error,
    data,
    isFetching } = useQuery({
      queryKey: ["experiences"],
      queryFn: () => getExperiences()
    });

  return (
    <div className="admin-exp" id="Experience">
      <div className="container">
        <span>Experiences</span>
        <div className="experiences">
          {data && data.map(exp =>
            <div className='experience' key={exp._id}>
              <AdminEditExp experience={exp} />
              <AdminDeleteExp id={exp._id} />
            </div>
          )}
          <AdminAddExp />
        </div>
      </div>
    </div>
  )
}

export default AdminExp