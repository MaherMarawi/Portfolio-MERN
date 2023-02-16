import "./social.scss"
import me from "../../images/me.jpg"
import { TbBrandGithub } from 'react-icons/tb'
import { FiLinkedin } from 'react-icons/fi'
import { FaRegIdCard } from 'react-icons/fa'
import cv from '../../files/cv.pdf'
import { useQuery } from "@tanstack/react-query"
import { getMainTitle } from "../../api/mainTitleApi"
import Loader from "../../loader/Loader"


const Social = () => {

    const titleID = "611628d3f0f4731e50547bee"

    const { data, error, isLoading } = useQuery({
        queryKey: ["mainTitle", titleID],
        queryFn: () => getMainTitle(titleID),
        onSuccess: data => {
        }
    });
    return (
        <div className="social" id="Social">
            <div className="container">
                <img src={me} alt="my photo" />
                <div className="left">
                    <div className="icons">
                        <a href='https://github.com/MaherMarawi' target='_Blank' rel="noreferrer"><TbBrandGithub size={40} /></a>
                        <a href='https://www.linkedin.com/in/maher-marawi/' target='_Blank' rel="noreferrer"><FiLinkedin size={40} /></a>
                        <a href={cv} target='_Blank' download><FaRegIdCard size={40} rel="noreferrer" /></a>
                    </div>
                    <div className="main-title">
                        <span>{data ? data.mainTitleText : <Loader />}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Social;
