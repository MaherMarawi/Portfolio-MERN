import React from 'react'
import Zoom from 'react-reveal/Zoom';

function ExpDetails({ experiences }) {
    return (
        <React.Fragment>
            {experiences.map(exp =>
                <div className='col-md-6' key={exp.id}>
                    <Zoom bottom>
                        <div className='progress-container progress-primary'>
                            <span className='progress-badge'>{exp.name}</span>
                            <div className='progress'>
                                <div className='progress-bar progress-bar-primary aos-init aos-animate' style={{ width: `${exp.grade}%` }}></div>
                                <span className='progress-value'>{exp.grade}</span>
                            </div>
                        </div>
                    </Zoom>
                </div>
            )}
        </React.Fragment>
    )
}

export default ExpDetails