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
            <div className='h4 mt-0 title'>Information:</div>
            { info ?
                <React.Fragment>
                    <div className='row mt-3'>
                        <div className='col-sm-4'>
                            <strong className='text-uppercase'>First name: </strong>
                        </div>
                        <div className='col-sm-8'>{info?.firstName}
                        </div>
                    </div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='text-uppercase'>Last name:   </strong></div><div className='col-sm-8'>{info?.lastName}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='text-uppercase'>Email:   </strong></div><div className='col-sm-8'>{info?.email}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='text-uppercase'>Phone:   </strong></div><div className='col-sm-8'>{info?.phoneNumber}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='text-uppercase'>Address:   </strong></div><div className='col-sm-8'>{info?.address}</div></div>
                    <div className='row mt-3'><div className='col-sm-4'><strong className='text-uppercase'>Language:   </strong></div><div className='col-sm-8'>{info?.languages}</div></div>
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
