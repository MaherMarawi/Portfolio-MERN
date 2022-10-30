import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../url'

function Info() {
    const[ info, setInfo ] = useState(null)
    const[ done, setDone ] = useState(true)
    const[ numb, setNumb ] = useState(0)
    useEffect(() => {
        axios.get(`${url}/getUser/5fa5af509ad07f363cd869a2`)
            .then( res => {setDone(false)
                setInfo(res.data)})
            .catch( err => console.log(err))
        return() => {
            setDone(true)
            setNumb(0)
        }
    },[numb])
    const onClick = () => {
        axios.put(`${url}/updateUser/5fa5af509ad07f363cd869a2`,info)
            .then( res => {setNumb(numb +1)
                setInfo(null)})
            .catch( err => console.log(err))
    }
    const onChange = (e) => {
        setInfo({...info,[e.target.name]: e.target.value})
    }
    return (
        <div  className='card adminpanel-card card-body'>
        {!done ? 
            <React.Fragment>
            <h3>Information</h3>
                <input type='text' onChange={onChange} name='firstName'  value={info?.firstName} />
                <input  name='lastName' onChange={onChange} value={info?.lastName}  />
                <input type='text' name='email' onChange={onChange} value={info?.email}  />
                <input  name='phoneNumber' onChange={onChange} value={info?.phoneNumber}  />
                <input  name='address' onChange={onChange} value={info?.address}  />
                <input  name='languages' onChange={onChange} value={info?.languages} /><br></br>
            </React.Fragment>
             : <p>loading...</p>}
             <button disabled={done} onClick={() => onClick()} >{done ? 'loading...' : 'Edit'}</button>
             <hr></hr>
        </div>
    )
}
export default Info

