import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';

const Technique = ({ techniqueDetails, handleClick, size }) => {

    const {title, intro, iconEle, desc} = techniqueDetails;

    return (
        <Col lg={ size === 'LG' ? 12 : 6}>
            <div className={`technique-container ${ size === 'LG' && 'solo' }`}>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h4 className="technique-title">{title}</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <p className="technique-intro">
                                {size === 'LG' ? desc : intro}
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div onClick={handleClick} className="technique-icon-container">
                    {iconEle}
                </div>
            </div>
        </Col>
    )
}

export default Technique;