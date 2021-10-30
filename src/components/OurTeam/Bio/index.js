import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './index.css';
import Kia from '../../../media/imgs/portraits/Kia-Portrait.jpeg';
// import aboutVideo from './videos/aboutVideo.mov'


const Bio = () => {

    const [readMore, setReadMore] = useState(false);

    const readMoreContent = [ 'My goal is to help you achieve your goals and be aware of your beliefs, habits, and behaviors. I will assist you in creating new options for yourself to help you create long lasting change. I bring humor, energy, empathy, and honesty. Together, we will take responsibility and learn to move forward with passion and confidence. We all grow up with different skills and knowledge, but one skill we all share is resilience. You have the ability to overcome whatever life challenges you face. You owe it yourself to live your life to its fullest. Contact me and lets find the resilience in you.'];

    const renderReadMore = () => {
        return readMoreContent.map(content => {
            return (
                <p className={"read-more-content"}>
                    {content}
                </p>
            )
        })
    }

    return (
        <Container className="bio-container">
            <Row>
                <Col lg={6}>
                    <a rel="noreferrer" target="_blank" href="https://www.psychologytoday.com/us/therapists/92234/874123?sid=6106da4dc5c23&ref=35"> 
                        <img className="bio-portrait" src={Kia} alt="bio portrait" />
                    </a>
                </Col>
                <Col lg={6}>
                    <h3 className="bio-name">
                        Kiavash Ebadat
                    </h3>
                    <div className="bio-description">
                        <p>
                        Have you been feeling stuck or limited? Do you believe that you will never feel loved or appreciated? Do you feel that no matter what you do the outcomes are always the same? Or no matter how hard you try you will never be good enough and fail? Well it is not a coincidence. We create negative beliefs and meanings (from our childhood) about ourselves to create these issues. Have you ever said to yourself over and over again "I'll never find love?" or "I'll probably fail" Well, they are not true, but you made it your reality through habitual ways of thinking, feeling, and acting.
                        </p>
                        {readMore === false && <div className="read-btn more" onClick={() => setReadMore(true)}>Read More</div>}
                        {readMore && renderReadMore() }
                        {readMore === true && <div className="read-btn less" onClick={() => setReadMore(false)}>Read Less</div>}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Bio;