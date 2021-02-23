import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'

function Educations() {

    const [educations, setEducations] = useState([])
    useEffect(() => {
        axios.get(`${url}/getEducations`)
            .then(res => { setEducations(res.data) })
            .catch(err => console.log(err))
        return () => {

        }
    }, [])
    return (
        <div className='section' id='Education'>
            <div className='container cc-education'>
                <div className='h4 text-center mb-4 title'>Educations</div>
                {educations && educations.map(edu =>
                    <div className='card'>
                        <div className='row'>
                            <div className='col-md-3 jj aos-init aos-animate'>
                                <div className='card-body cc-experience-header'>
                                    <p>{edu.timeline}</p>
                                    <div className='h5'>{edu.place}</div>
                                </div>
                            </div>
                            <div className='col-md-9 aos-init aos-animate'>
                                <div className='card-body'>
                                    <div className='h5'>{edu.name}</div>
                                    <p>{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Educations
