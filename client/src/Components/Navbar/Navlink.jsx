import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink
} from 'reactstrap';

const Navlink = () => {
    const [navStyle, setNavstyle] = useState({
        background: 'transparent',
        paddingTop: '30px',
        color: 'rgb(211, 187, 155)'

    })
    const [info, setInfo] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const listenScrollEvent = e => {
        if (window.scrollY > 525) {
            setNavstyle({ background: '#2e4036', paddingTop: '20px', color: 'rgb(211, 187, 155)', marginTop: '-625px' })
        } else {
            setNavstyle({ background: 'transparent', paddingTop: '40px', color: 'rgb(211, 187, 155)' })
        }
    }
    
    useEffect(() => {
        axios.get(`${url}/getUser/5fa5af509ad07f363cd869a2`)
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => console.log(err))
        window.addEventListener('scroll', listenScrollEvent)
    }, [])
    return (
        <div className='navlink' style={navStyle}>
            <Navbar color={navStyle.background} dark expand="lg" className="mb-5">
                <Container>
                    <NavbarBrand href='#' id='name' style={{ color: navStyle.color }} >{info?.firstName} {info?.lastName}</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar style={{backgroundColor: navStyle.background }}>
                            <NavItem>
                                <NavLink href='#About' className='link' style={{ color: navStyle.color }}>ABOUT</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#Experiences' className='link' style={{ color: navStyle.color }}>EXPERIENCES</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#Projects' className='link' style={{ color: navStyle.color }}>PROJECTS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#Education' className='link' style={{ color: navStyle.color }}>EDUCATIONS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#Contact' className='link' style={{ color: navStyle.color }}>CONTACT</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navlink


