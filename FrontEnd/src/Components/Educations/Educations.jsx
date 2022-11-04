import React, { useState, useEffect } from 'react'
import axios from 'axios'
import url from '../../url'
import HeadShake from 'react-reveal/HeadShake';
import EduDetails from './EduDetails'
import EduDetSkeleton from './EduDetSkeleton';

function Educations() {

    const [educations, setEducations] = useState([])
    
    useEffect(() => {
        axios.get(`${url}/getEducations`)
            .then(res => { 
                setEducations(res.data) })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className='container' id='Education'>
                <div className='card' >
                    <div className='card-body'>
                        <HeadShake>
                            <h4 className='title'>Education</h4>
                        </HeadShake>
                    </div>
                    { educations.length> 0 ?
                        <EduDetails educations={educations} />
                        :
                        <EduDetSkeleton />
                    }
                </div>
            </div >
        </div >
    )
}

export default Educations
