import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'
import { Placeholder } from 'semantic-ui-react'

function AdminNavbar() {

    const [mainTitleText, setMainTitleText] = useState()
    const [done, setDone] = useState(false)

    useEffect(() => {
        axios.get(`${url}/getMainTitle/611628d3f0f4731e50547bee`)
            .then(res => {
                setMainTitleText(res.data)
            })
    }, [])
    const onclick = () => {
        setDone(true)
        axios.put(`${url}/updateMainTitle/611628d3f0f4731e50547bee`, mainTitleText)
            .then(data => { setDone(false) })
    }
    const onchange = (e) => {
        setMainTitleText({ [e.target.name]: e.target.value })
    }
    return (
        <div className='card adminpanel-card card-body'>
            {done ?
                <Placeholder>
                <Placeholder.Header>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
              </Placeholder>
                :
                <React.Fragment>
                    <h3>main title text</h3>
                    <input value={mainTitleText && mainTitleText.mainTitleText} onChange={onchange} name="mainTitleText"></input>
                </React.Fragment>
            }

            <button onClick={() => onclick()} disabled={done} >{done ? 'loading...' : 'Edit'}</button>
        </div>
    )
}

export default AdminNavbar
