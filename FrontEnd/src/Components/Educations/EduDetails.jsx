import React from 'react'
import Bounce from 'react-reveal/Bounce';

function EduDetails({ educations }) {
    return (
        <div>
            {educations.map(edu =>
                <div className='row' key={edu._id}>
                    <Bounce left>
                        <div className='col-md-3 aos-init aos-animate'>
                            <div className='education-header'>
                                <p>{edu.timeline}</p>
                                <h4>{edu.place}</h4>
                            </div>
                        </div>
                    </Bounce>
                    <Bounce right>
                        <div className='col-md-9'>
                            <div className='card-body'>
                                <div className='h5'>{edu.name}</div>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    </Bounce>
                </div>
            )}
        </div>
    )
}

export default EduDetails