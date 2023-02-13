import "./home.scss"
import Navbar from "../../Components/navbar/Navbar"
import About from "../../Components/about/About"
import Experiences from "../../Components/experiences/Exp"
import Projects from "../../Components/projects/Pro"
import Education from "../../Components/education/Edu"
import Contact from "../../Components/contact/Contact"
import Social from "../../Components/social/Social"
import Footer from "../../Components/footer/Footer"

function Home() {
  return (
    <div className="home">
        <Navbar />
        <Social />
        <About />
        <Experiences />
        <Projects />
        <Education />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home