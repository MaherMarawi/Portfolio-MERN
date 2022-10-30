import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../url'

function Text() {
    const[ info, setInfo ] = useState(null)
    const[ done, setDone ] = useState(true)
    const[ numb, setNumb ] = useState(0)
    useEffect(() => {
        axios.get(`${url}/getAbout/5fa5acebd953234264241730`)
            .then( res => {
                setDone(false)
                setInfo(res.data)})
            .catch( err => console.log(err))
        return() => {
            setDone(true)
            setNumb(0)
        }
    },[numb])
    const onClick = () => {
        console.log(info)
        axios.put(`${url}/updateAbout/5fa5acebd953234264241730`,info)
            .then( res => {setNumb(numb +1)
                setInfo(null)})
            .catch( err => console.log(err))
    }
    const onChange = (e) => {
        setInfo({[e.target.name]:e.target.value})
    }
    return (
        <div className='card adminpanel-card card-body'>
        {!done ? 
            <React.Fragment>
            <h3>about text</h3>
                <textarea className='ad-textarea' name={'aboutText'} onChange={onChange} value={info?.aboutText} ></textarea> <br></br>
            </React.Fragment>
             : <p>loading...</p>}
             <button disabled={done} onClick={() => onClick()} >{done ? 'loading...' : 'Edit'}</button>
             <hr></hr>
        </div>
    )
}
export default Text