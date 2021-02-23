import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Text() {
    const[ info, setInfo ] = useState(null)
    const[ done, setDone ] = useState(true)
    const[ numb, setNumb ] = useState(0)
    useEffect(() => {
        axios.get('http://localhost:8000/api/getAbout/5fa5acebd953234264241730')
            .then( res => {console.log(info)
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
        axios.put('http://localhost:8000/api/updateAbout/5fa5acebd953234264241730',info)
            .then( res => {setNumb(numb +1)
                setInfo(null)})
            .catch( err => console.log(err))
    }
    const onChange = (e) => {
        setInfo({[e.target.name]:e.target.value})
    }
    return (
        <div>
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