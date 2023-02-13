import "./social.scss"
import me from "../../images/me.jpg"
import { TbBrandGithub } from 'react-icons/tb'
import { FiLinkedin } from 'react-icons/fi'
import { FaRegIdCard } from 'react-icons/fa'
import cv from '../../files/cv.pdf'



const Social = () => {
    return (
        <div className="social" id="Social">
            <div className="container">
                <img src={me} />
                <div className="icons">
                    <a href='https://github.com/MaherMarawi' target='_Blank'><TbBrandGithub size={40} /></a>
                    <a href='https://www.linkedin.com/in/maher-marawi/' target='_Blank'><FiLinkedin size={40} /></a>
                    <a href={cv} target='_Blank' download><FaRegIdCard size={40} /></a>
                </div>
            </div>
        </div>
    );
}

export default Social;
