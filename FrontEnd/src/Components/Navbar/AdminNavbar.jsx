import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'

function AdminNavbar() {
    const [mainTitleText, setMainTitleText] = useState()
    useEffect(() => {
        axios.get(`${url}/getMainTitle/611628d3f0f4731e50547bee`)
            .then(res => {
                setMainTitleText(res.data)
                })
    }, [])
    const onclick = () => {
        axios.put(`${url}/updateMainTitle/611628d3f0f4731e50547bee`, mainTitleText)
            .then(data => {})
    }
    const onchange = (e) => {
        setMainTitleText({[e.target.name]:e.target.value})
    }
    return (
        <div className='card adminpanel-card card-body'>
            <h3>main title text</h3>
            <input value={mainTitleText && mainTitleText.mainTitleText} onChange={onchange} name="mainTitleText"></input>
            <button onClick={() => onclick()}>Edit</button>
        </div>
    )
}

export default AdminNavbar
