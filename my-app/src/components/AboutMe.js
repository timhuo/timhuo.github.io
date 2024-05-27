import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import "../css/AboutMe.css";
import _PORTFOLIO from "../Portfolio.js";
import {
    Linkedin,
    Github,
    Envelope
} from "react-bootstrap-icons";

const AboutMe = () => {
    return (
        <Container id="AboutMe">
            <Row>
                <Col sm={5}>
                    <Image src={_PORTFOLIO._BIO.profilePicture} roundedCircle />
                </Col>
                <Col sm={7} id="AM-bio">
                    <h1 id="AM-name">{_PORTFOLIO._BIO.name}</h1>
                    <p id="AM-summary">{_PORTFOLIO._BIO.summary}</p>
                    <hr className="line" />
                    <div id="AM-icon-row">
                        <a href={_PORTFOLIO._BIO.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={45} className="AM-icons" /> </a>
                        <a href={_PORTFOLIO._BIO.github} target="_blank" rel="noopener noreferrer"><Github size={45} className="AM-icons" /></a>
                        <a href="" target="_blank" rel="noopener noreferrer"><Envelope size={45} className="AM-icons" /></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe;