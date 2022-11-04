import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'

import HeadShake from 'react-reveal/HeadShake';
import ExpDetails from './ExpDetails';
import ExpDetSkeleton from './ExpDetSkeleton';

const Experience = () => {
    const [experiences, setExperiences] = useState([])
    useEffect(() => {
        axios.get(`${url}/getExperiences`)
            .then(res => { setExperiences(res.data) })
            .catch(err => console.log(err))
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
                            {experiences.length > 0 ?
                                <ExpDetails experiences={experiences} />
                                :
                                <ExpDetSkeleton />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
