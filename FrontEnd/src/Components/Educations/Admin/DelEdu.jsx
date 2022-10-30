import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddEdu from './AddEdu'
import url from '../../../url'

function DelEdu() {
    const [ numb, setNumb ] = useState(0)
    const [ educations, setEducations ] = useState([])
    useEffect(() => {
        axios.get(`${url}/getEducations`)
            .then( res => {setEducations(res.data)})
            .catch( err => console.log(err))
        return() => {
            setNumb(0)
        }
    }, [numb])
    const onClick = (id) => {
        axios.delete(`${url}/deleteEducation/${id}`)
            .then( res => {console.log(res.data)
                setNumb(numb +1)})
            .catch( err => console.log(err))
    }
    return (
        <div  className='card adminpanel-card card-body'>
        <h3>Educations</h3>
        {educations && educations.map(edu => 
            <React.Fragment key={edu._id}>
                <label>name</label><input type='text' name='name'  value={edu.name} />
                <label>timeline</label><input type='text' name='name'  value={edu.timeline} />
                <label>place</label><input type='text' name='name'  value={edu.place} />
                <label>description</label><input type='text' name='description' value={edu.description}  />
                
                <button onClick={() => onClick(edu._id)}>delete</button>
                <br></br>
            </React.Fragment>
        )}
        <AddEdu numb={numb} setNumb={setNumb} />
        <hr></hr>
        </div>
    )
}

export default DelEdu
