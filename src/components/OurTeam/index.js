import React, { Component } from 'react';
import { Container, } from 'react-bootstrap';

import './index.css';
import '../../App.css';
import Bio from './Bio';
import Techniques from './Techniques';

class OurTeam extends Component {

    render() {

        return (
            <Container className="our-team-container">
                <h1 className="page-title">Our Team</h1>
                <Bio />
                <Techniques />
            </Container>
        )
    }
}

export default OurTeam;