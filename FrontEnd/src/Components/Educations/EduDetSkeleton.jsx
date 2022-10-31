import React from 'react'
import { Placeholder } from 'semantic-ui-react'
import Bounce from 'react-reveal/Bounce';

function EduDetSkeleton() {
    return (
        <div className='row'>
            <Bounce left>
                <div className='col-md-3'>
                    <div className='card-body'>
                        <div className='h5'>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                            </Placeholder>
                        </div>
                    </div>
                </div>
            </Bounce>
            <Bounce right>
                <div className='col-md-9'>
                    <div className='card-body'>
                        <div className='h5'>
                            <Placeholder>
                                <Placeholder.Header image>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder.Header>
                            </Placeholder>
                        </div>
                    </div>
                </div>
            </Bounce>
        </div>
    )
}

export default EduDetSkeleton