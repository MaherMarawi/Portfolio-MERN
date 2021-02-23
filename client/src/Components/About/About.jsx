import React from 'react'
import AboutInfo from './AboutInfo';
import AboutText from './AboutText';
import { Divider, Grid, Segment } from 'semantic-ui-react'
// import Img from '../2new.png'

const About = () => {

  return (
    <div className='section' id='About'>
      <div className="container">
        <div className='card aos-init aos-animate'>
          <div className='row'>
            <div className='col-lg-6 col-md-12'><AboutText /></div>
            <div className='col-lg-6 col-md-12'><AboutInfo /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
