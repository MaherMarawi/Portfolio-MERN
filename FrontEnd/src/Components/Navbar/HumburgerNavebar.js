import { FcDatabase } from 'react-icons/fc'
import HumburgerForm from './HumburgerForm';
import { useState } from 'react'

const HumburgerNavbar = () => {
    const [humFormStyle, setHumFormStyle] = useState({
        top: '-50%'
    })

    const onclick = () => {
        if(humFormStyle.top == '-50%')
            setHumFormStyle({top: '10%'})
        else
            setHumFormStyle({top: '-50%'})
        console.log(humFormStyle.top)
    }

    return (
        <div>
            <HumburgerForm humFormStyle={humFormStyle} setHumFormStyle={setHumFormStyle} />
            <div className='humburgerm-icon' onClick={() => onclick()}>
                <FcDatabase size={30} />
            </div>
        </div>
    )
}

export default HumburgerNavbar;