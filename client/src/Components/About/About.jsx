import React from 'react'
import AboutInfo from './AboutInfo';
import AboutText from './AboutText';
import Bounce from 'react-reveal/Bounce';
import Wobble from 'react-reveal/Wobble';
import Flash from 'react-reveal/Flash';
import Jello from 'react-reveal/Jello';

const About = () => {

  return (
    <Jello>
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
    </Jello>
  )
}

export default About
