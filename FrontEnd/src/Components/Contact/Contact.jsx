import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm';
import axios from 'axios'
import url from '../../url'
import HeadShake from 'react-reveal/HeadShake';


const Contact = () => {
    const [info, setInfo] = useState(null)
    useEffect(() => {
        axios.get(`${url}/getUser/5fa5af509ad07f363cd869a2`)
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div>
                <HeadShake>
                    <h4 className='title' id='Contact'>Contact me</h4>
                </HeadShake>
                <div className='mapouter'>
                    <div>
                        <iframe width="100%" height="550px" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=Rotterdam%20The%20netherlands&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
                <div className='container'>
                    <div className='form'>
                        <div className='card form-div'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact