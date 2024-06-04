import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import "../css/Work.css";
import _PORTFOLIO from "../Portfolio.js";

const AboutMe = () => {
    return (
        <Container id="Work">
            <Row className="section">
                <h1>Work Experience</h1>
                {_PORTFOLIO._WORK.map((company) => {
                    return <>
                    <Row className="align-items-center" style={{ padding: "20px" }}>
                        <Col sm={2}>
                        <Image style={{width: "150px"}} src={company.logoURL} roundedCircle />
                        </Col>
                        <Col sm={10}>
                            <h2>{company.name}</h2>
                            <h3 className="AM-light">{company.position}</h3>
                            <h5 className="AM-light">{company.startDate} - {company.endDate}</h5>
                            <h5 className="AM-light">{company.summary}</h5>
                        </Col>
                    </Row>
                    <hr />
                    </>
                })}
            </Row>
        </Container>
    )
}

{/* <Row className="section">
                <h1>Education</h1>
                {_PORTFOLIO._BIO.education.map((school) => {
                    return <>
                    <Row className="align-items-center" style={{ padding: "20px" }}>
                        <Col sm={2}>
                        <Image style={{width: "150px"}} src={school.logoURL} roundedCircle />
                        </Col>
                        <Col sm={10}>
                            <h2>{school.institution}</h2>
                            <h3 className="AM-light">{school.degree} in {school.field}</h3>
                            <h5 className="AM-light">{school.startDate} - {school.endDate}</h5>
                        </Col>
                    </Row>
                    <hr />
                    </>
                })}
            </Row> */}

export default AboutMe;