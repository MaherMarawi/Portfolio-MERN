import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddExp from './AddExp'
import url from '../../../url'

const DelExp = () => {
    const [ numb, setNumb ] = useState(0)
    const [ experiences, setExperiences ] = useState([])
    useEffect(() => {
        axios.get(`${url}/getExperiences`)
            .then( res => {setExperiences(res.data)})
            .catch( err => console.log(err))
        return() => {
            setNumb(0)
        }
    }, [numb])
    const onClick = (id) => {
        axios.delete(`${url}/deleteExperience/${id}`)
            .then( res => {console.log(res.data)
                setNumb(numb +1)})
            .catch( err => console.log(err))
    }
    return (
        <div  className='card adminpanel-card card-body'>
        <h3>Experiences</h3>
        {experiences && experiences.map(exp => 
            <React.Fragment key={exp._id}>
                <label>name</label><input type='text' name='name'  value={exp.name} />
                <label>grade</label><input type='text' name='grade' value={exp.grade}  />
                
                <button onClick={() => onClick(exp._id)}>delete</button>
                <br></br>
            </React.Fragment>
        )}
        <AddExp numb={numb} setNumb={setNumb} />
        <hr></hr>
        </div>
    )
}
export default DelExp