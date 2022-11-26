import React, { useEffect, useState } from 'react'
import img from '../../Images/me.jpg'
import { Link } from 'react-router-dom'
import cv from '../../files/cv.pdf'
import axios from 'axios'
import url from '../../url'
import Navlink from './Navlink'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import PlaceholderLoading from 'react-placeholder-loading'
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';



const Navimg = () => {
  const [mainTitle, setMainTitle] = useState()
  useEffect(() => {
    axios.get(`${url}/getMainTitle/611628d3f0f4731e50547bee`)
      .then(data => { setMainTitle(data.data) })
  }, [])
  return (
    <div>
      <div className='navimg' id='Home'>
        <Navlink />
      </div>
      <div className="nav-titles">
        <img className='mijn-img' src={img}></img>

        {mainTitle ?
          <span className='nav-title'>
            {mainTitle && mainTitle.mainTitleText}
          </span>
          :
          <div className='nav-title-div'>
            <span className='nav-title'>LOADING</span>
            <PlaceholderLoading colorStart="#5c320b" colorEnd="#d07d2f" shape="rect" width={200} height={27} />
          </div>
        }
        <Link to={cv} target="_blank" download><PictureAsPdfOutlinedIcon className='btn-cv' sx={{ fontSize: 80 }}/>
        </Link>
      </div>
    </div>
  )
}

export default Navimg
