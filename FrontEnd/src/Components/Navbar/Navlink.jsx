import React, { useState, useEffect } from 'react'

const Navlink = () => {
    // const [navStyle, setNavstyle] = useState({
    //     background: 'transparent',
    //     paddingTop: '30px',
    //     color: 'rgb(211, 187, 155)'

    // })
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const listenScrollEvent = e => {
        // if (window.scrollY > 525) {
        //     setNavstyle({ background: '#ffe741', paddingTop: '.1%', color: 'rgb(211, 187, 155)', marginTop: '-625px' })
        // } else {
        //     setNavstyle({ background: 'transparent', paddingTop: '40px', color: 'rgb(211, 187, 155)' })
        // }
    }
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])
    return (
        <div>
            <ul className='navlink'>
                <li><a href='#Home'>HOME</a></li>
                <li><a href='#About' >ABOUT</a></li>
                <li><a href='#Experience'>EXPERIENCES</a></li>
                <li><a href='#Projects'>PROJECTS</a></li>
                <li><a href='#Education'>EDUCATION</a></li>
                <li><a href='#Contact'>CONTACT</a></li>
            </ul>
        </div>
    )
}
export default Navlink


