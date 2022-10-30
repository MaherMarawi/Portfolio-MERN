import React from 'react'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Projects from './Projects/Projects';
import Experience from './Experiences/Experience';
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Educations from './Educations/Educations';

const Home = () => {
    
    return (
        <React.Fragment>
              <Navbar />
              <About />
              <Experience />
              <Projects />
              <Educations />
              <Contact />
              <Footer />
        </React.Fragment>
    )
}

export default Home
