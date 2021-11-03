import React, { Component, } from 'react';
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
            muteSwitch: true,
        }
    }

    changeMuteValue = () => {
        console.log('What the Fuck!');
        this.setState({
            ...this.state,
            muteSwitch: !this.state.muteSwitch
        })
    }

    render() {

        const { muteSwitch } = this.state;
        let muteButton = muteSwitch ? <FaVolumeMute className="mute-btn" /> : <FaVolumeUp className="mute-btn" />;

        return(
            <Container fluid className="home-container">
                <div className="home-top-row">
                    <div onClick={this.changeMuteValue} className="mute-btn-container">
                        {muteButton}
                    </div>
                    <div className="video-container">
                        <ReactPlayer className="video-player" width='100%' height='100%' loop={true} playing={true} controls={false} volume={muteSwitch ? 0 : 1} muted={muteSwitch} url='https://www.youtube.com/watch?v=RSd_zOdqIfs' />
                    </div>
                    <div className="content">
                        <div className="page-title-container">
                            <h1 className="page-title">RESILIENCE</h1>
                        </div>
                        <div className="resilience-def-container">
                            <h6>Overcome challenges and achieve more than what you believe is possible.</h6>
                        </div>
                    </div>
                </div>
                <WhoWeHelp />
            </Container>
        )
    }
}

export default Home;