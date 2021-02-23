import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'

const Experience = () => {
    const [experiences, setExperiences] = useState([])
    useEffect(() => {
        axios.get(`${url}/getExperiences`)
            .then(res => { setExperiences(res.data) })
            .catch(err => console.log(err))
        return () => {

        }
    }, [])
    return (
        <div className='section' id='Experiences'>
            <div className='container'>
                <div className='h4 text-center mb-4 title'>Experiences</div>
                <div className='card aos-init aos-animate'>
                    <div className='card-body'>
                        <div className='row'>
                            {experiences?.map(exp =>

                                <div className='col-md-6'>
                                    <div className='progress-container progress-primary'>
                                        <span className='progress-badge'>{exp.name}</span>
                                        <div className='progress'>
                                        <div className='progress-bar progress-bar-primary aos-init aos-animate' style={{ width: `${exp.grade}%` }}></div>
                                        
                                        
                                        <span className='progress-value'>{exp.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience
