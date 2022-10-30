import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'
import Zoom from 'react-reveal/Zoom';
import HeadShake from 'react-reveal/HeadShake';

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
        <div>
            <div className='container' id='Experience'>
                <div className='card'>
                    <div className='card-body'>
                        <HeadShake>
                            <h4 className='title'>Experiences</h4>
                        </HeadShake>
                        <div className='row'>
                            {experiences?.map(exp =>

                                <div className='col-md-6' key={exp.id}>
                                    <Zoom bottom>
                                        <div className='progress-container progress-primary'>
                                            <span className='progress-badge'>{exp.name}</span>
                                            <div className='progress'>
                                                <div className='progress-bar progress-bar-primary aos-init aos-animate' style={{ width: `${exp.grade}%` }}></div>


                                                <span className='progress-value'>{exp.grade}</span>
                                            </div>
                                        </div>
                                    </Zoom>
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
