import React, { useState } from 'react'
import axios from 'axios'
import url from '../../../url'

function AddEdu({ numb, setNumb }) {
    const [ education, setEducation ] = useState({})

    const onClick = () => {
        axios.post(`${url}/postEducation`,education)
            .then( res => {setNumb(numb +1)})
            .catch( err => console.log(err))
    }
    
    const onChange = (e) => {
        setEducation({...education,[e.target.name]: e.target.value})
    }
    return (
        <div className='card adminpanel-card card-body'>
            <h3>add education</h3>
                <label>name</label><input onChange={onChange} type='text' name='name' />
                <label>timeline</label><input onChange={onChange} type='text' name='timeline' />
                <label>place</label><input onChange={onChange} type='text' name='place' />
                <label>description</label><input onChange={onChange} type='text' name='description' />
            <button onClick={() => onClick()} >add</button>
        </div>
    )
}

export default AddEdu
