import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import url from '../../url'


const ContactForm = () => {
    const [ message, setMessage ] = useState(null)
    const [ check, setCheck ] = useState('')
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const onChange = (e) => {
        setMessage({...message,[e.target.name]: e.target.value})
    }
    useEffect(() => {
        return () => {
            setCheck('')
        }
    }, [])
    const onClick = () => {
        setLoading(true)
        setError('')
        setCheck('')
        if (message?.name && message?.email && message?.message) {
            axios.post(`${url}/sendEmail`, message)
        .then( res => {setCheck(res.data)
            setMessage({name: '', email: '', message: ''})
            setLoading(false)
            })
        .catch( err => console.log(err))
        } else {
            setError('Please fill the all fields')
            setMessage({name: '', email: '', message: ''})
            setLoading(false)
        }
        
    }
    return (
        
        <div className=''>
            {check && <label style={{color: 'green'}}>{check}</label> }
            {error && <label style={{color: 'red'}}>{error}</label> }
                <label>Feel free to contact me</label>
                <input type='text' 
                        name='name' 
                        onChange={onChange} 
                        className='form-input' 
                        placeholder='Name'
                        value={message?.name}
                        />
                <input type='text' 
                        name='email'
                        onChange={onChange} 
                        className='form-input' 
                        placeholder='Email'
                        value={message?.email}
                        />
                <textarea  onChange={onChange} 
                        name='message'
                        value={message?.message}
                        placeholder='Your message'>
                        
                </textarea><br></br>
                 <Button loading={loading} className='form-button' onClick={onClick} secondary>Send</Button>  
        </div>
    )
}

export default ContactForm
