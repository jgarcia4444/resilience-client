import React, { Component, createRef } from 'react';
import { Container, } from 'react-bootstrap';
import ReactPlayer from 'react-player/youtube';
import {FaVolumeMute, FaVolumeUp} from "react-icons/fa";

import './index.css';
import '../../App.css';
import WhoWeHelp from './WhoWeHelp';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leavingPage: false,
            muteSwitch: true,
        }
        this.iFrameContainerRef = createRef();
    }

    render() {

        const { leavingPage, muteSwitch } = this.state;

        return(
            <Container fluid className="home-container">
                <div className="home-top-row">
                    <div className="video-container">
                        <ReactPlayer width='100%' height='100%' loop={true} playing={true} controls={false} muted={muteSwitch} url='https://www.youtube.com/watch?v=RSd_zOdqIfs' />
                    </div>
                    <div className="content">
                        <div className="page-title-container">
                            <h1 className="page-title">RESILIENCE</h1>
                        </div>
                        <div className="resilience-def-container">
                            <h6>Overcoming challenges and achieve more than what you believe is possible.</h6>
                        </div>
                    </div>
                </div>
                <WhoWeHelp />
            </Container>
        )
    }
}

export default Home;