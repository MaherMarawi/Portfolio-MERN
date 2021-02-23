import React from 'react'
import instaIcon from '../../Images/github.png'
import linkIcon from '../../Images/linkedin.png'

const Footer = () => {
    return (
        <div className='footer'>
            <h1 className='footer-text'>Maher Marawi</h1>
            <a href='https://github.com/MaherMarawi' target='_Blank'><img className='icon' src={instaIcon} /></a>
                <a href='https://www.linkedin.com/' target='_Blank'><img className='icon' src={linkIcon} /></a>
        </div>
    )
}

export default Footer
