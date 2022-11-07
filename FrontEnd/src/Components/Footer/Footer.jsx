import React from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { FiLinkedin } from 'react-icons/fi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <div className='footer'>
            <h4>Maher Marawi</h4>
            <div className='icons'>

                <a href='https://github.com/MaherMarawi' target='_Blank'><TbBrandGithub size={40} /></a>
                <a href='https://www.linkedin.com/in/maher-marawi/' target='_Blank'><FiLinkedin size={40} /></a>
                
            </div>

        </div>
    )
}

export default Footer
