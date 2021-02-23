import React, { useState, useEffect } from 'react'
import Info from './About/Admin/Info'
import Text from './About/Admin/Text'
import ProjectsAdmin from './Projects/ProjectAdmin/Delete';
import DelExp from './Experiences/Admin/DelExp'
import DelEdu from './Educations/Admin/DelEdu';

const Admin = () => {
    const [ pass, setPass ] = useState('')
    useEffect(() => {
        const p = prompt('enter password')
        setPass(p)
        return () => {
            setPass('')
        }
    }, [])
    return (
        <div style={{margin: '20px'}}>
        {pass === 'maher' ? <div>
            <Info />
            <Text />
            <ProjectsAdmin />
            <DelExp />
            <DelEdu />
            </div> : <h1>404 page not found</h1>}
        </div>
    )
}

export default Admin

