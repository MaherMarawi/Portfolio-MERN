import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Button } from 'semantic-ui-react'
import url from '../../url'
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const [message, setMessage] = useState(null)
    const [check, setCheck] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();
    }


    const timer = setTimeout((value) => {

    }, 1000);


    const onChange = (e) => {
        console.log("rendred")
        setError('')
        setMessage({ ...message, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        return () => {
            setCheck('')
        }
    }, [])
    const onClick = (e) => {
        e.preventDefault();
        setLoading(true)
        setError('')
        setCheck('')
        if (message?.name && message?.email && message?.message) {
            emailjs.send('service_xw8s8dg', 'template_4c8yo5m', message, 'yv_FvhoXwy3tl2ezl')
                .then((result) => {
                    setCheck('your message has been sent')
                    setLoading(false)
                    setTimeout(() => {
                        setCheck('')
                    }, 3000);
                }, (error) => {
                    setError('somthing went wrong')
                    setLoading(false)
                    setTimeout(() => {
                        setCheck('')
                    }, 3000);
                });



            // axios.post(`${url}/sendEmail`, message)
            //     .then(res => {
            //         setCheck(res.data)
            //         setMessage({ name: '', email: '', message: '' })
            //         setLoading(false)
            //     })
            //     .catch(err => console.log(err))
        } else {
            setError('Please fill the all fields')
            setLoading(false)
        }

    }
    return (

        <div className='form-components'>
            {check && <label style={{ color: 'green' }}>{check}</label>}
            {error && <label style={{ color: 'red' }}>{error}</label>}
            <label>feel free to contact me</label>
            <input type='text'
                name='name'
                onChange={onChange}
                placeholder='Name'
                value={message?.name}
            />
            <input type='text'
                name='email'
                onChange={onChange}
                placeholder='Email'
                value={message?.email}
            />
            <textarea onChange={onChange}
                name='message'
                value={message?.message}
                placeholder='Your message'>
            </textarea><br></br>
            <Button loading={loading} onClick={onClick} secondary>Send</Button>
        </div>
    )
}


export default ContactForm
