import React, { useState, useEffect } from 'react'
import url from '../../url'
import imageUrl from '../../imageUrl'
import axios from 'axios'
import altImg from '../../imageProject/1.jpg'
import RubberBand from 'react-reveal/RubberBand';
import HeadShake from 'react-reveal/HeadShake';

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
                            <div className='row'>
                                {projects?.map(project =>
                                    <div className='col-md-6' key={project.id}>
                                        <RubberBand>
                                            <div className='cc-porfolio-image img-raised aos-init aos-animate'>
                                                <a href={project.url} target='_Blank'>
                                                    <figure className='cc-effect'>
                                                        <img src={`${imageUrl}${project.projectImage}`} onError={(e) => { e.target.onerror = null; e.target.src = altImg }}></img>
                                                        <figcaption>
                                                            <div className='overlay'>
                                                                <h4>{project.name}</h4>
                                                                <p>{project.description}</p>
                                                                <h4>Used Framework</h4>
                                                                <p>{project.usedFramework}</p>
                                                                {project.codeUrl && project.codeUrl && <h4><a href={project.codeUrl} target='_Blank'>Code on Github</a></h4>}
                                                            </div>
                                                        </figcaption>
                                                    </figure>
                                                </a>
                                            </div>
                                        </RubberBand>
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