import React from 'react'
import { Card, Placeholder } from 'semantic-ui-react'
import RubberBand from 'react-reveal/RubberBand';

function ProDetSkeleton() {
    return (
        <Card.Group itemsPerRow={3}>
            <Card>
                <Card.Content>
                    <Placeholder>
                        <Placeholder.Image square />
                    </Placeholder>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Placeholder>
                        <Placeholder.Image square />
                    </Placeholder>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Placeholder>
                        <Placeholder.Image square />
                    </Placeholder>
                </Card.Content>
            </Card>
        </Card.Group>

    )
}

export default ProDetSkeleton