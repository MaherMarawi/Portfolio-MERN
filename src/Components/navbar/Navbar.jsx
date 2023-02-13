import "./navbar.scss"
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Navbar = () => {

  const { darkMode, toggle } = useContext(DarkModeContext)
  const [menuMobilePosition, setMenuMobilePosition] = useState(-220)

  const toggleMenuMobile = () => {
    setMenuMobilePosition(menuMobilePosition == -220 ? 60 : -220)
  }


  return (
    <div className='navbar'>
      <span><a href="#">Maher Marawi</a></span>
      <div className="navbar-all">
        <div className="icons">
          <div className="dark-mode" onClick={toggle}>
            {
              darkMode ?
                <WbSunnyOutlinedIcon />
                :
                <DarkModeOutlinedIcon />
            }
          </div>
          <div className="mobile-menu" onClick={toggleMenuMobile}><MenuOutlinedIcon /></div>
          <div className="navbar-items-mobile" style={{ top: menuMobilePosition }}>
            <a onClick={toggleMenuMobile} href='#About' >ABOUT</a>
            <a onClick={toggleMenuMobile} href='#Experience'>EXPERIENCES</a>
            <a onClick={toggleMenuMobile} href='#Projects'>PROJECTS</a>
            <a onClick={toggleMenuMobile} href='#Education'>EDUCATION</a>
            <a onClick={toggleMenuMobile} href='#Contact'>CONTACT</a>
          </div>
        </div>
        <div className="navbar-items">
          <a href='#About' >ABOUT</a>
          <a href='#Experience'>EXPERIENCES</a>
          <a href='#Projects'>PROJECTS</a>
          <a href='#Education'>EDUCATION</a>
          <a href='#Contact'>CONTACT</a>
        </div>
      </div>


    </div>

  )
}

export default Navbar

