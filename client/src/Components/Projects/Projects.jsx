import React, { useState, useEffect } from 'react'
import url from '../../url'
import imageUrl from '../../imageUrl'
import axios from 'axios'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        axios.get(`${url}/getProjects`)
            .then(res => { setProjects(res.data) })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='section' id='Projects'>
            <div className='h4 text-center mb-4 title'>Projects</div>
            <div className='container'>
                <div className='tab-content gallery mt-5'>
                    <div className='tab-pane active'>
                        <div className='ml-auto mr-auto'>
                            <div className='row'>
                                {projects?.map(project =>
                                    <div className='col-md-6'>
                                        <div className='cc-porfolio-image img-raised aos-init aos-animate'>
                                            <a href={project.url} target='_Blank'>
                                                <figure className='cc-effect'>
                                                    <img src={`${imageUrl}${project.projectImage}`}></img>
                                                    <p>{imageUrl}{project.projectImage}</p>
                                                    <figcaption>
                                                    <div className='overlay'>
                                                        <div className='h4 text'>{project.name}</div>
                                                        <p className='text-p'>{project.description}</p>
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects