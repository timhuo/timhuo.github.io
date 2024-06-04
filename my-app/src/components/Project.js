import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import "../css/Project.css";
import _PORTFOLIO from "../Portfolio.js";
import Card from 'react-bootstrap/Card';


const Project = () => {
    return (
        <Container id="Work">
            <Row className="section">
                <h1>Featured Projects</h1>
                <Row>
                    {_PORTFOLIO._PROJECT.map((pro) => {
                        return <Col xs={12} md={6} lg={4} key={pro.id} style={{ marginBottom: "10px" }}>
                            <Card className="h-100 d-flex flex-column" style={{ padding: "10px" }}>
                                <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={pro.logoURL} />
                                <Card.Body className="flex-grow-1">
                                    <Card.Title>{pro.name} </Card.Title>
                                    <Card.Text>{pro.date}</Card.Text>
                                    <Card.Text>Summary: {pro.summary}</Card.Text>
                                    <Card.Text>Tech Stack: {pro.techstack}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Row>
            <Row className="section">
                <h1>Competition</h1>
                <Row>
                    {_PORTFOLIO._COMPETITION.map((comp) => {
                        return <Col xs={12} md={6} lg={4} key={comp.id} style={{ marginBottom: "10px" }}>
                            <Card className="h-100 d-flex flex-column" style={{ padding: "10px" }}>
                                <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={comp.logoURL} />
                                <Card.Body className="flex-grow-1">
                                    <Card.Title>{comp.name} </Card.Title>
                                    <Card.Title>{comp.award}</Card.Title>
                                    <Card.Text>{comp.date}</Card.Text>
                                    <Card.Text>Summary: {comp.summary}</Card.Text>
                                    <Card.Text>Tech Stack: {comp.techstack}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Issued by: {comp.issueby}</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Row>
        </Container>
    )
}

export default Project;