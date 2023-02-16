import "./exp.scss"
import { useState } from 'react'
import {
  useQuery,
} from '@tanstack/react-query'
import { getExperiences } from "../../api/experiencesApi.js"

const Exp = () => {

  const {
    isLoading,
    error,
    data,
    isFetching } = useQuery({
      queryKey: ["experiences"],
      queryFn: () => getExperiences()
    });
  if (error) return (
    <div className="exp">
      <div className="container">
        <span>{error.message}</span>
      </div>
    </div>
  )
  
  return (
    <div className="exp" id="Experience">
      <div className="container">
        <span>Experiences</span>
        <div className="experiences">
          {data && data.map(exp =>
            <div className='experience' key={exp._id}>
              <label>{exp.name}</label>
              <div className="w3-light-grey">
                <div className="w3-container w3-grey w3-center" style={{ width: exp.grade + "%" }}>{exp.grade}%</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Exp