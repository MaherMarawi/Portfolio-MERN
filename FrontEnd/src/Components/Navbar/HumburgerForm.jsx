import React from 'react'

function HumburgerForm({humFormStyle, setHumFormStyle}) {

    const onclick = () => {
        setHumFormStyle({top: '-50%'})
    }
    return (
        <div>
            <ul className='HumNavlink' style={humFormStyle}>
                <li onClick={() => onclick()}><a href='#Home'>HOME</a></li>
                <li onClick={() => onclick()}><a href='#About' >ABOUT</a></li>
                <li onClick={() => onclick()}><a href='#Experience'>EXPERIENCES</a></li>
                <li onClick={() => onclick()}><a href='#Projects'>PROJECTS</a></li>
                <li onClick={() => onclick()}><a href='#Education'>EDUCATION</a></li>
                <li onClick={() => onclick()}><a href='#Contact'>CONTACT</a></li>
            </ul>
        </div>
    )
}

export default HumburgerForm