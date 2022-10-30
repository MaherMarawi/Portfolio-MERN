import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'
import Bounce from 'react-reveal/Bounce';
import HeadShake from 'react-reveal/HeadShake';

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
        <div>
            <div className='container' id='Education'>
            
        <div className='card' >
        <HeadShake>
            <h4 className='title'>Education</h4>
        </HeadShake>
                {educations && educations.map(edu =>
                    
                        <div className='row' key={edu.id}>
                        <Bounce left>
                            <div className='col-md-3 aos-init aos-animate'>
                                <div className='education-header'>
                                    <p>{edu.timeline}</p>
                                    <h4>{edu.place}</h4>
                                </div>
                            </div>
                            </Bounce>
                            <Bounce right>
                            <div className='col-md-9 aos-init aos-animate'>
                                <div className='card-body'>
                                    <div className='h5'>{edu.name}</div>
                                    <p>{edu.description}</p>
                                </div>
                            </div>
                            </Bounce>
                        </div>
                    
                )}
                </div>
            </div>

        </div>
    )
}

export default Educations
