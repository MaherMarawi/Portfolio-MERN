import React, { useState, useEffect } from 'react'
import url from '../../url'
import axios from 'axios'
import HeadShake from 'react-reveal/HeadShake';
import PorDetails from './PorDetails'
import ProDetSkeleton from './ProDetSkeleton'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get(`${url}/getProjects`)
            .then(res => { setProjects(res.data) })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className='container' id='Projects'>
                <div className='card tab-content gallery mt-5'>
                    <div className='tab-pane active'>
                        <div className=' ml-auto mr-auto'>
                            <div className='card-body'>
                                <HeadShake>
                                    <h4 className='title'>Projects</h4>
                                </HeadShake>
                            </div>
                            {projects.length > 0 ?
                                <PorDetails projects={projects} />
                                :
                                <ProDetSkeleton />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects