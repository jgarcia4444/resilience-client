import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './index.css';

const HelpCard = ({details}) => {

    const {title, content} = details;

    return (
        <Container className="help-card-container">
            <Row className="help-card-title-row">
                <h4>
                    {title}
                </h4>
            </Row>
            <Row>
                <p>
                    {content}
                </p>
            </Row>
        </Container>
    )
}

export default HelpCard;