import React, { Component } from 'react';
import { Container, Row, } from 'react-bootstrap';
import { FaBalanceScale, FaBrain, FaTools, FaChalkboardTeacher } from 'react-icons/fa';

import './index.css';
import Technique from './Technique';
import GoBackBtn from './GoBackBtn';

class Techniques extends Component {

    state = {
        displayState: "ALL",
        techniqueToDisplay: ""
    }

    getTechniqueDetails = () => {
        const iconSize = 60;
        return [
            {
                title: "CBT",
                intro: "Cognitive Behavioral Therapy",
                iconEle: <FaBrain className="technique-icon" size={iconSize} />,
                desc: "Teaching you on how your beliefs and meanings you made for yourself control your emotions and actions that create consistent challenges for you. We help you to change your beliefs and emotions to stop you from limiting yourself in all aspects of your life. "
            },
            {
                title: "MINDFULLNESS",
                intro: "Mind and Body Awareness",
                iconEle: <FaBalanceScale className="technique-icon" size={iconSize} />,
                desc: "Helping individuals stay present in their relationships, careers, hobbies, mind, and body."
            },
            {
                title: "TOOLS TO SUCCESS",
                intro: "Skill Building is essential",
                iconEle: <FaTools className="technique-icon" size={iconSize} />,
                desc: "Accessing skills you already have and creating new skills in order to overcome any challenges that come your way"
            },
            {
                title: "PHYSIOLOGY",
                intro: "Life advice, etc...",
                iconEle: <FaChalkboardTeacher className="technique-icon" size={iconSize} />,
                desc: "Our bodies are another part of our lives that is important to understand and appreciate. However when our minds our stressed, or when our environment is chaotic; our bodies have to find ways to hold on to our pain and stress. We teach you how to use your body in a healthy and confident way so your free from physical pain and feel flexible as ever. "
            },
        ]
    }

    displayTechniques = () => {
        const techniqueDetailsArray = this.getTechniqueDetails();
        return techniqueDetailsArray.map((technique, i) => <Technique size="" handleClick={() => this.handleIconClick(technique.title)} key={i} techniqueDetails={technique} />)
    }


    displaySoloTechnique = () => {
        const { techniqueToDisplay } = this.state;

        let techniqueObject = this.getTechniqueDetails().find(technique => {
            let upperCasedTitle = technique.title.toUpperCase();
            if ( upperCasedTitle === techniqueToDisplay ) {
                return technique;
            } else {
                return ""
            }
        })
        return <Technique size="LG" techniqueDetails={techniqueObject} />;
    }

    handleIconClick = (title) => {
        this.setState({
            ...this.state,
            displayState: 'SOLO',
            techniqueToDisplay: title.toUpperCase()
        });
    }

    handleBackClick = () => {
        this.setState({
            ...this.state,
            displayState: 'ALL',
            techniqueToDisplay: ""
        });
    }


    render () {

        const { displayState } = this.state;
        const { displayTechniques, displaySoloTechnique } = this;

        return (
            <Container className="techniques-container">
                <Row className="technique-title-row">
                    <h2 className="techniques-title">Techniques</h2>
                </Row>
                <Row>
                    { displayState !== "ALL" && <GoBackBtn goBackClick={this.handleBackClick} /> }
                    { displayState === "ALL" ? displayTechniques() : displaySoloTechnique() }
                </Row>
            </Container>
        )
    }
}

export default Techniques;