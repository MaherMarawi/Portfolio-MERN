import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Placeholder } from 'semantic-ui-react'
import url from '../../url'
import HeadShake from 'react-reveal/HeadShake';

const AboutText = () => {
    const [text, setText] = useState(null)
    useEffect(() => {
        axios.get(`${url}/getAbout/5fa5acebd953234264241730`)
            .then(res => {
                setText(res.data)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='card-body'>
            <HeadShake>
            <h4 className='title'>About me</h4>
        </HeadShake>
            
            <p>
                {text ? text.aboutText : <Placeholder>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder>}
            </p>
        </div>
    )
}

export default AboutText
