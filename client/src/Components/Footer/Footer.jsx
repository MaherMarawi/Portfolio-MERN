import React from 'react'
import instaIcon from '../../Images/github.png'
import linkIcon from '../../Images/linkedin.png'

const Footer = () => {
    const [info, setInfo] = useState(null)
    useEffect(() => {
        axios.get(`${url}/getUser/5fa5af509ad07f363cd869a2`)
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='footer'>
            <h1 className='footer-text'>{info?.firstName} {info?.lastName}</h1>
            <a href='https://github.com/MaherMarawi' target='_Blank'><img className='icon' src={instaIcon} /></a>
                <a href='https://www.linkedin.com/' target='_Blank'><img className='icon' src={linkIcon} /></a>
        </div>
    )
}

export default Footer
