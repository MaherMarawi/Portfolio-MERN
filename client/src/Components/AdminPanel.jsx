import React, { useState, useEffect } from 'react'
import Info from './About/Admin/Info'
import Text from './About/Admin/Text'
import ProjectsAdmin from './Projects/ProjectAdmin/Delete';
import DelExp from './Experiences/Admin/DelExp'
import DelEdu from './Educations/Admin/DelEdu';
import Pass from './About/Admin/Pass'
import axios from 'axios'
import url from '../url'

const AdminPanel = () => {
    const[ done, setDone ] = useState(true)
    const [pass, setPass] = useState('')
    const [logPass, setLogPass] = useState('')
    useEffect(() => {
        axios.get(`${url}/getPass/60362dacdb1b3622c0660042`)
            .then(res => {setPass(res.data.pass)})
            .catch(err => prompt(err))
        const p = prompt('enter password')
        setLogPass(p)
        setDone(false)
        return () => {
            setPass('')
            setLogPass('')
        }
    }, [])
    if (logPass === pass && done === false) {
        return(
            <div>
            <Pass />
                <Info />
                <Text />
                <ProjectsAdmin />
                <DelExp />
                <DelEdu />
            </div>
        )
    } else {
        return(<div>
            <h1>404 page not found</h1>
            </div>)
    }
}

export default AdminPanel

