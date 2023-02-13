import "./exp.scss"
import { useState } from 'react'
import {
  useQuery,
} from '@tanstack/react-query'
import { makeRequest } from "../../axios"

const Exp = () => {

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["experiences"],
    queryFn: () =>
      makeRequest
        .get("getExperiences")
        .then((res) => res.data),
  });

  return (
    <div className="exp" id="Experience">
      <div className="container">
        <span>Experiences</span>
        <div className="experiences">
          {data && data.map(exp =>
            <div className='experience' key={exp._id}>
              <label>{exp.name}</label>
              <div className="w3-light-grey">
                <div className="w3-container w3-grey w3-center" style={{ width: exp.grade+"%" }}>{exp.grade}%</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Exp