import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Placeholder } from 'semantic-ui-react'

const AboutText = () => {
    const[text, setText] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:8000/api/getAbout/5fa5acebd953234264241730')
            .then( res => {
                setText(res.data)})
            .catch( err => console.log(err))
        
    }, [])
    return ( 
        <div className='card-body'>
            <div className='h4 mt-0 title'>
                About me:</div>
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
