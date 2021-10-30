import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import HelpCard from './HelpCard';

class WhoWeHelp extends Component {

    getHelpObjects = () => {

        return [
            {
                title: "Relationships",
                content: "Here at Resilience, we believe relationships are a beautiful and challenging aspect of our lives. As human beings we are always growing and changing. The same can be said with our relationships. As we get older our relationships with our partner, children, and parents change quite frequently. Our team helps you continue to improve your role in your family or relationship and overcome challenges that come your way."
            },
            {
                title: "Depression" ,
                content: "Here at Resilience, we know that you were not born depressed, hopeless, and insecure. You were born pure with curiosity and an openness to learn everything. However on the way we learn to believe and value things that keep our life hopeless and depressing. Our team helps shape the meaning you created about your life in order to help you succeed and meet your personal goals."
            },
            {
                title: "Anxiety" ,
                content: "Stress and fear are among us all. Here at Resilience, we believe our worries and how we cope with it comes from years of past experience with family, friends and our communities. They limit us in becoming the person we are meant to be. Our team helps you perceive and understand your worries in a way that will allow you to live life to its fullest without your anxiety holding you back."
            },
            {
                title: "Physical Health" ,
                content: "Here at Resilience we believe that exercise is one of the many ways that can help you live a healthy and energized life. However we understand there are challenges in maintaining exercise and keeping up with our physical health. Here at Resilience we help you learn how to stay consistent and meet your exercise or sports goals, as well as team you up with amazing fitness coaches who can take your physical health to the next level."                
            },
            {
                title: 'Spirituality',
                content: "We all want a sense of purpose or a deeper meaning in life. Usually we question our purpose in life when an unfortunate circumstance happens. Here at Resilience, our team provides the support and guidance to help you achieve your spiritual goals. We make sure our values and beliefs stay separate from yours and (while we work with you through this) allow you to create your own meaning."
            },
        ]

    }

    renderHelpObjects = () => {
        return (
            <Container className="help-cards-container" >
                <Row>
                    {
                        this.getHelpObjects().map((helpObj, keyIndex) => {
                            return (
                                <Col key={keyIndex} md={6} className="help-card-col">
                                    <HelpCard details={helpObj} />
                                </Col>
                            )
                            
                        })
                    }
                </Row>
            </Container>
            
        )
            
    }

    render () {

        return (
            <Container className="who-we-help-container">
                <Row className="who-we-helptitle-row">
                    <h2 className="who-we-help-title">Who We Help</h2>
                </Row>
                {this.renderHelpObjects()}
            </Container>
        )
    }
}

export default WhoWeHelp;