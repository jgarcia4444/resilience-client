
import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import emailjs from 'emailjs-com';

import './index.css';

class ContactForm extends Component {

    state = {
        contactForm: {
            fName: "",
            lName: "",
            inputEmail: "",
            phoneNumber: "",
            message: "",
            errors: {
                fNameError: "",
                lNameError: "",
                emailError: "",
                phoneError: ""
            }
        }
    }

    // noErrors = () => {
    //     let errorKeys = Object.keys(this.state.contactForm.errors);
        
    // }

    handleFormSubmit = (e) => {
        e.preventDefault();
        
        this.validateForm();
        // const { contactForm } = this.state;
        // let { errors } = contactForm;

        // if (this.noErrors()) {
        //     this.resetErrors()
            // emailjs.send('default_service', 'template_zs58hy5', contactForm, 'user_Gb0LOSfyDGVyShCx6kW2i')
            // .then((res) => {
            //     console.log("Success Email was sent!")
            // }, (error) => {
            //     console.log(`Error ${error}`)
            // })
        // } 

        // Make a check for errors function that iterates through the errors
        // object and checks if all the values are empty strings

        
    }

    validateNames = () => {
        let { nameError } = this;
        let { fName, lName } = this.state.contactForm;

        return {
            fNameError: nameError(fName),
            lNameError: nameError(lName)
        }
    }

    nameError = (name) => {
        let chars = name.split('');
        chars.forEach(char => {
            if (isNaN(parseInt(char))) {
                return "Name can not contain numbers.";
            }
        })
        if (chars.length < 3) {
            return "Name must be 3 characters long.";
        }
    }

    validateEmail = () => {
        let { inputEmail } = this.state.contactForm;
        let emailSplitByAt = inputEmail.split('@');
        if (emailSplitByAt.length < 2) {
            return {
                emailError: "An email must contain an '@' symbol"
            };
        }

        let firstPart = emailSplitByAt[0];
        if (firstPart.length < 1) {
            return {
                emailError: "There must be characters before the '@' symbol"
            };
        }
        let secondPart = emailSplitByAt[1];
        let secondPartSplit = secondPart.split('.');
        if (secondPartSplit.length < 2) {
            return {
                emailError: 'Email must contain a "." '
            }
        }
    }

    validatePhone = () => {
        let { phoneNumber } = this.state.contactForm;
        if (phoneNumber.length < 10) {
            return "Phone number must contain area code."
        }
    }

    validateForm = () => {
        let { validateNames, validateEmail, validatePhone } = this;
        let { fNameError, lNameError } = validateNames(); 

        let emailError = validateEmail()
        
        let phoneError = validatePhone()

        let errors = {
            fNameError,
            lNameError,
            emailError,
            phoneError
        }
        this.setState({
            ...this.state,
            contactForm: {
                ...this.state.contactForm,
                errors: {
                    ...errors
                }
            }
        })
    }



    handleInputChange = ({target}) => {
        const {name, value} = target;
        this.setState({
            ...this.state,
            contactForm: {
                ...this.state.contactForm,
                [name]: value
            }
            
        })
    }

    render() {
        const { fName, lName, inputEmail, phoneNumber, message } = this.state.contactForm;
        const { handleInputChange, handleFormSubmit } = this;
        return (
            <form onSubmit={handleFormSubmit} className="contact-form">
                    <Container className="contact-form-container">
                        <Row>
                            <Col sm={6}>
                                <Row>
                                    <label htmlFor="fName" className="form-label">First Name<span className="label-asterisk"><sup>*</sup></span></label>
                                    <input required value={fName} id="fName" onChange={handleInputChange} type="text" name="fName" className="contact-input" />
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row>
                                    <label htmlFor="lName" className="form-label">Last Name<span className="label-asterisk"><sup>*</sup></span></label>
                                    <input required id="lName" value={lName} onChange={handleInputChange} type="text" name="lName" className="contact-input" />
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6}>
                                <Row>
                                    <label htmlFor="inputEmail" className="form-label">Email<span className="label-asterisk"><sup>*</sup></span></label>
                                    <input required id="inputEmail" type="inputEmail" name="inputEmail" className="contact-input" value={inputEmail} onChange={handleInputChange} />
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row>
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number<span className="label-asterisk"><sup>*</sup></span></label>
                                    <input required id="phoneNumber" type="tel" name="phoneNumber" className="contact-input" value={phoneNumber} onChange={handleInputChange} />
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <Row>
                                    <label className="form-label" htmlFor="message">Message</label>
                                    <textarea id="message" name="message" value={message} onChange={handleInputChange} className="contact-input message-input" placeholder="Ask us a question or send us a message."></textarea>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <button type="submit" className="btn btn-primary submit-btn">Send</button>
                        </Row>
                    </Container>
                </form>
        )
    }
}

export default ContactForm;