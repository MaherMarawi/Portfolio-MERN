import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../../url'
import { Placeholder } from 'semantic-ui-react'


function Pass() {
    const [done, setDone] = useState(true)
    const [pass, setPass] = useState('')
    // const [newPass, setNewPass] = useState('')
    const [numb, setNumb] = useState(0)
    const [b, setB] = useState(false)

    useEffect(() => {
        axios.get(`${url}/getPass/60362dacdb1b3622c0660042`)
            .then(res => {
                setDone(false)
                setPass(res.data)
            })
            .catch(err => prompt(err))
        return () => {
            setDone(true)
            setNumb(0)
        }
    }, [numb])
    const onshow = () => {
        setB(!b)
    }
    const onClick = () => {
        setDone(true)
        axios.put(`${url}/updatePass/60362dacdb1b3622c0660042`, pass)
            .then(res => {
                setNumb(numb + 1)
                setPass(null)
                setDone(false)
            })
            .catch(err => prompt(err))
    }
    const onChange = (e) => {
        setPass({ [e.target.name]: e.target.value })
    }
    return (
        <div className='card adminpanel-card card-body'>
            {done ?
                <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
              </Placeholder>
                :
                <React.Fragment>
                    <label><strong>Password</strong></label>
                    <input name='pass' type={b == true ? "text" : "password"} value={pass && pass.pass} onChange={onChange}>
                    </input><label onClick={() => onshow()}>show</label>
                    
                </React.Fragment>
            }

            <button disabled={done} onClick={() => onClick()} >{done ? 'loading...' : 'Edit'}</button>
        </div>
    )
}

export default Pass
