import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import "./contact.scss"
import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [message, setMessage] = useState(null)
    const [check, setCheck] = useState('I always like to hear a suggestion')
    const [colorStyle, setColorStyle] = useState('')
    const [loading, setLoading] = useState(false)

    const { darkMode } = useContext(DarkModeContext)

    const timer = setTimeout(() => {
    }, 1000);
    const onChange = (e) => {
        setCheck('I always like to hear a suggestion')
        setColorStyle('')
        setMessage({ ...message, [e.target.name]: e.target.value })
    }
    const onClick = (e) => {
        e.preventDefault();
        setLoading(true)
        setCheck('I always like to hear a suggestion')
        setColorStyle('')
        if (message?.name && message?.email && message?.message) {
            emailjs.send('service_xw8s8dg', 'template_4c8yo5m', message, 'yv_FvhoXwy3tl2ezl')
                .then((result) => {
                    setCheck('Your message has been sent')
                    setColorStyle('limegreen')
                    setLoading(false)
                    setTimeout(() => {
                        setCheck('I always like to hear a suggestion')
                        setColorStyle('')
                        setMessage({name: "", email: "", message: ""})
                    }, 3000);
                    
                }, (error) => {
                    setCheck('Somthing went wrong')
                    setColorStyle('crimson')
                    setLoading(false)
                    setTimeout(() => {
                        setCheck('I always like to hear a suggestion')
                        setColorStyle('')
                    }, 3000);
                });
        } else {
            setCheck('Please fill the all fields')
            setColorStyle('crimson')
            setLoading(false)
        }

    }



    return (
        <div className="contact" id="Contact">
            <div className="container">
                <span>Contact</span>
                <iframe title="map" style={!darkMode ? { filter: "grayscale(20%) invert(92%) contrast(83%)" } : { filter: "none" }}
                    src="https://maps.google.com/maps?q=Rotterdam%20The%20netherlands&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" >
                </iframe>
                <div className="form-contact">
                    <form>
                        <p style={{colorStyle} ? {color: colorStyle} : {}}>{check}</p>

                        <input type="text"
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
                        <input type="textarea"
                            onChange={onChange}
                            name='message'
                            value={message?.message}
                            placeholder='Message'
                        />
                        <button disabled={loading} onClick={onClick} >{loading ? "loading" : "Send"}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
