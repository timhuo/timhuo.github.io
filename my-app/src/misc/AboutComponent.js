import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import history from '../img/history.jpeg';
import "../css/AboutComponent.css";

const AboutComponent = () => {
    return (
        <Container id="about">
            <h2 className="title">ABOUT</h2>
            <Row>
                <Col sm={6}>
                    <h3>History</h3>
                    <br/>
                    <p id="history-summary">
                        Since 2015, HiTEA Cafe has been delighting Honolulu with outstanding boba creations and authentic Asian fare. Our fresh smoothies, teas, and scratch-made meals keep customers coming back. Customize your dream drink and taste our passion for freshness.
                    </p>
                    <br/>
                    <p>
                        We look forward to meeting you!
                    </p>
                </Col>
                <Col id="about-img-container" sm={6}>
                    <Image id="about-img" src={history} alt="food" />
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}

export default AboutComponent;