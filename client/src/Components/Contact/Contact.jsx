import React, { useState, useEffect } from 'react'
import ContactForm from './ContactForm';
import axios from 'axios'
import url from '../../url'
import Pulse from 'react-reveal/Pulse';
import Roll from 'react-reveal/Roll';


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
        <Roll>
            <div className='section' id='Contact'>
                <div className='h4 text-center mb-4 title'>Contact me</div>
                <div className='cc-contact-information'>
                    <div className='mapouter'>
                        <div className='gmap-canvas'>
                            <iframe width="100%" height="800px" id="gmap_canvas" title="map" src="https://maps.google.com/maps?q=Rotterdam%20The%20netherlands&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='cc-contact'>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <div className='card mb-0 aos-init aos-animate'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='card-body'>
                                                    <ContactForm />
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div class="card-body"><p class="mb-0"><strong>Language</strong></p><p class="pb-2">{info?.languages}</p><p class="mb-0"><strong>Address</strong></p><p class="pb-2">{info?.address}</p><p class="mb-0"><strong>Phone</strong></p><p>{info?.phoneNumber}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Roll>
    )
}

export default Contact