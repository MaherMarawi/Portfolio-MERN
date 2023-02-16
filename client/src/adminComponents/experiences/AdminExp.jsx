import "./adminExp.scss"
import { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { getExperiences, updateExperience } from "../../api/experiencesApi.js"
import AdminDeleteExp from "./AdminDeleteExp"
import AdminAddExp from "./AdminAddExp"

const AdminExp = () => {
  const queryClient = useQueryClient()
  const [experiences, setExperiences] = useState()

  const {
    isLoading,
    error,
    data,
    isFetching } = useQuery({
      queryKey: ["experiences"],
      queryFn: () => getExperiences(),
      onSuccess: data => {
        setExperiences(data)
      }
    });

  const updateExperienceMutation = useMutation({
    mutationFn: exp => updateExperience(exp._id, exp),
    onSuccess: () => {
      queryClient.invalidateQueries(["experiences"])
    }
  })

  const handleChange = () => {

  }

  const handleSubmit = () => {
    updateExperienceMutation.mutate()
  }

  return (
    <div className="admin-exp" id="Experience">
      <div className="container">
        <span>Experiences</span>
        <div className="experiences">
          {data && data.map(exp =>
            <div className='experience' key={exp._id}>
              <input defaultValue={exp.name} name="name" onChange={handleChange} />
              <input defaultValue={exp.grade} name="grade" onChange={handleChange} />
              <button disabled={true} onClick={() => handleSubmit()}>Edit</button>
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