import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import "../css/Experience.css";
import _PORTFOLIO from "../Portfolio.js";

const Experience = () => {
    return (
        <Container id="Experience">
            <Row className="section">
                <h1 style={{ textAlign: "center" }}>Experience</h1>
                <h2>Work Experience</h2>
                {_PORTFOLIO._WORK.map((company) => {
                    return <>
                    <Row className="align-items-center" style={{ padding: "20px" }}>
                        <Col sm={2}>
                        <Image style={{width: "150px"}} src={company.logoURL} roundedCircle />
                        </Col>
                        <Col sm={10}>
                            <h3>{company.name}</h3>
                            <h4 className="AM-light">{company.position}</h4>
                            <h5 className="AM-light">{company.startDate} - {company.endDate}</h5>
                            <h5 className="AM-light">{company.summary}</h5>
                        </Col>
                    </Row>
                    <hr />
                    </>
                })}
            </Row>
            <Row className="section">
                <h2>Volunteer Experience</h2>
                {_PORTFOLIO._VOLUNTEER.map((company) => {
                    return <>
                    <Row className="align-items-center" style={{ padding: "20px" }}>
                        <Col sm={2}>
                        <Image style={{width: "150px"}} src={company.logoURL} roundedCircle />
                        </Col>
                        <Col sm={10}>
                            <h3>{company.name}</h3>
                            <h4 className="AM-light">{company.position}</h4>
                            <h5 className="AM-light">{company.summary}</h5>
                            <h5 className="AM-light">Media: {company.media.map((set) => {
                                return <>
                                | <a rel="noreferrer" target="_blank" href={set[1]}>{set[0]}</a> | 
                                </>
                            })}</h5>
                        </Col>
                    </Row>
                    <hr />
                    </>
                })}
            </Row>
        </Container>
    )
}

export default Experience;