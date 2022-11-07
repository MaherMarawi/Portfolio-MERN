import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './Add'
import url from '../../../url'
import imageUrl from '../../../imageUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function ProjectsAdmin() {
    const [ numb, setNumb ] = useState(0)
    const [ projects, setProjects ] = useState([])
    useEffect(() => {
        axios.get(`${url}/getProjects`)
            .then( res => {setProjects(res.data)})
            .catch( err => console.log(err))
        return() => {
            setNumb(0)
        }
    }, [numb])
    const onClick = (id) => {
        axios.delete(`${url}/deleteProject/${id}`)
            .then( res => {console.log(res.data)
                setNumb(numb +1)})
            .catch( err => console.log(err))
    }
    return (
        <div>
            <div  className='card adminpanel-card card-body'>
                <h3>Projects</h3>
                {projects && projects.map(project => 
                    <React.Fragment key={project._id}>
                        <label>name</label><input type='text' name='name'  value={project.name} />
                        <label>url</label><input type='text' name='url' value={project.url}  />
                        <label>description</label><input type='text' name='description' value={project.description}  />
                        <label>usedFramework</label><input type='text' name='usedFramework' value={project.usedFramework}  />
                        <label>codeUrl</label><input type='text' name='codeUrl' value={project.codeUrl}  />
                        <label>Image :</label><label>{project.projectImage}</label><img style={{ margin: '1px', width: '100px'}} src={`${imageUrl}${project.projectImage}`}></img>
                        
                        <button onClick={() => onClick(project._id)} ><FontAwesomeIcon icon={faCoffee} /></button>
                        <br></br>
                    </React.Fragment>
                    
                )}
        </div>
        <div>
            <Add numb={numb} setNumb={setNumb} />
        </div>
        
        <hr></hr>
        </div>
    )
}

export default ProjectsAdmin
