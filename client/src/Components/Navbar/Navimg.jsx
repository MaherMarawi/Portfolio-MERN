import React from 'react'
import img from '../../Images/me.jpg'
import { Link } from 'react-router-dom'
import cv from '../../files/NL.NW.WD3_Maher Marawi.pdf'

const Navimg = () => {
  return (
    <div>
    <div className='navimg'>
    </div>
    <div>
      <img className='mijn-img' src={img}></img>
      <span className='img-title'>Full Stack Developer</span>
      <Link to={cv} target="_blank" download><button className='btn-cv'>Download CV</button></Link>
    </div>
    </div>
  )
}

export default Navimg
