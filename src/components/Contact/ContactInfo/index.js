
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MdPhoneIphone as Phone, MdMailOutline as Mail } from 'react-icons/md';

import './index.css';

const ContactInfo = () => {

    return (
        <Container className="contact-info-container">
            <Row>
                <Col sm={6}>
                    Phone
                    <Row>
                        <div id="phone" className="contact-point-cotainer">
                            <a className="contact-link" href="tel:+14087997893">(408) 799 - 7893 <Phone size={25} /></a>
                        </div>
                    </Row>
                </Col>
                <Col sm={6}>
                    Email
                <Row>
                    <div id="email" className="contact-point-cotainer">
                        <a className="contact-link" href="mailto:keya2309@gmail.com">keya2309@gmail.com <Mail size={25} /></a>
                    </div>
                </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactInfo;