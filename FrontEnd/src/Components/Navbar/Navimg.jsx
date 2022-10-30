import React, { useEffect, useState } from 'react'
import img from '../../Images/me.jpg'
import { Link } from 'react-router-dom'
import cv from '../../files/cv.pdf'
import axios from 'axios'
import url from '../../url'
import Navlink from './Navlink'
import {BsFileEarmarkPdfFill} from 'react-icons/bs'
import {TbLetterC, TbLetterV} from 'react-icons/tb'

const Navimg = () => {
  const [mainTitle, setMainTitle] = useState()
  useEffect(() => {
    axios.get(`${url}/getMainTitle/611628d3f0f4731e50547bee`)
      .then(data => {setMainTitle(data.data)})
  }, [])
  return (
    <div>
    <div className='navimg' id='Home'>
    <Navlink />
    </div>
    <div className="nav-titles">
      <img className='mijn-img' src={img}></img>
      <span className='img-title'>{mainTitle && mainTitle.mainTitleText}</span>
      <Link to={cv} target="_blank" download><BsFileEarmarkPdfFill className='btn-cv' contentScriptType={"cv"} color='#d07d2f' size={70} /></Link>
    </div>
    {/* <BsFileEarmarkPdfFill className='btn-cv' color='#d07d2f' size={100} >hl</BsFileEarmarkPdfFill> */}
    </div>
  )
}

export default Navimg
