import React, { useState } from 'react'
import axios from 'axios'
import url from '../../../url'

const AddExp = ({ numb, setNumb }) => {
    const [ experience, setExperience ] = useState({})

    const onClick = () => {
        axios.post(`${url}/postExperience`,experience)
            .then( res => {
                setNumb(numb +1)})
            .catch( err => console.log(err))
    }
    
    const onChange = (e) => {
        setExperience({...experience,[e.target.name]: e.target.value})
    }
    return (
        <div className='card adminpanel-card card-body'>
            <h3>add Experience</h3>
                <label>name</label><input onChange={onChange} type='text' name='name' />
                <label>grade</label><input onChange={onChange} type='number' name='grade' max={100} min={1} />
            <button onClick={() => onClick()} >add</button>
        </div>
    )
}

export default AddExp