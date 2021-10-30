import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import '../../App.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import ShowContactBtn from './ContactForm/ShowContactBtn';

class Contact extends Component {

    state = {
        showContactForm: false
    }

    showFormClick = () => {
        this.setState({
            ...this.state,
            showContactForm: !this.state.showContactForm
        });
    }

    render() {
        const { showFormClick } = this;
        const { showContactForm, } = this.state;

        return (
            <Container className="contact-container">
                <h1 className="page-title">Contact</h1>
                <ContactInfo />
                <Row>
                    <Col className="send-message-title" sm={8}>
                        <h2>Send us a Message</h2>
                    </Col>
                    <Col sm={4}>
                        <ShowContactBtn handleClick={showFormClick} show={showContactForm} />
                    </Col>
                </Row>
                {showContactForm && <ContactForm /> } 
            </Container>
        )
    }
}

export default Contact;