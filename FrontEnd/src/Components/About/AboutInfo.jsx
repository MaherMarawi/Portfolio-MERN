import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Placeholder } from 'semantic-ui-react'
import url from '../../url'

function AboutInfo() {
    const [info, setInfo] = useState(null)
    useEffect(() => {
        axios.get(`${url}/getUser/5fa5af509ad07f363cd869a2`)
            .then(res => {
                setInfo(res.data)
            })
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='card-body' >
            <h4 className='title'>Information:</h4>
            { info ?
                <React.Fragment>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='info-title'>First name:   </strong></div><div className='col-sm-8'>{info?.firstName}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='info-title'>Last name:   </strong></div><div className='col-sm-8'>{info?.lastName}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='info-title'>Email:   </strong></div><div className='col-sm-8'>{info?.email}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='info-title'>Phone:   </strong></div><div className='col-sm-8'>{info?.phoneNumber}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='info-title'>Address:   </strong></div><div className='col-sm-8'>{info?.address}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='info-title'>Language:   </strong></div><div className='col-sm-8'>{info?.languages}</div></div>
                </React.Fragment> :
                <Placeholder>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder>
            }
        </div>
    )
}

export default AboutInfo
