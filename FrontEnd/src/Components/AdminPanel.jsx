import React, { useState, useEffect } from 'react'
import Info from './About/Admin/Info'
import Text from './About/Admin/Text'
import ProjectsAdmin from './Projects/ProjectAdmin/Delete';
import DelExp from './Experiences/Admin/DelExp'
import DelEdu from './Educations/Admin/DelEdu';
import Pass from './About/Admin/Pass'
import axios from 'axios'
import AdminNavbar from './Navbar/AdminNavbar'
import url from '../url'


const AdminPanel = () => {
    const [done, setDone] = useState(true)
    const [pass, setPass] = useState('')
    const [logPass, setLogPass] = useState('')
    const[ b, setB ] = useState(false)
    const [style, setStyle] = useState(false)
    const onchange = (e) => {
        setLogPass(e.target.value)
        if (logPass == pass) {
            setStyle(!style)
        }
    }
    const onshow = () => {
        setB(!b)
    }
    useEffect(() => {
        axios.get(`${url}/getPass/60362dacdb1b3622c0660042`)
            .then(res => { setPass(res.data.pass) })
            .catch(err => console.log(err))
        // const p = prompt('enter password')

        // setLogPass(p)
        
        setDone(false)
        return () => {
            setPass('')
            setLogPass('')
        }
    }, [])
    // if (logPass === pass && done === false) {
    return (
        <div>
        <div  className='card adminpanel-card card-body' style={{display: style == true ? "none" : "block"}}>
        <input  placeholder="password" type={b == true ? "text" : "password"} onChange={onchange} >
            </input><label onClick={() => onshow()}>show</label>
        </div>
            
            <div style={{display: style == false ? "none" : "block"}}>
                <Pass />
                <Info />
                <AdminNavbar />
                <Text />
                <ProjectsAdmin />
                <DelExp />
                <DelEdu />
            </div>
                
            

        </div>
    )
    // } else {
    // return(<div>
    //     <h1>404 page not found</h1>
    //     <input type="password" placeholder="Hi" ></input>
    //     </div>)
    // }
}

export default AdminPanel

