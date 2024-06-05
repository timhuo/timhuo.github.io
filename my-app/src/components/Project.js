import React, { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import "../css/Project.css";
import _PORTFOLIO from "../Portfolio.js";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Project = () => {

    const [modalProject, setModalProject] = useState(false);
    const [modalComp, setModalComp] = useState(false);
    const [selectProject, setSelectProject] = useState(null);

    const handleProjectClose = () => setModalProject(false);
    const handleCompClose = () => setModalComp(false);

    const modalFunc = (pro, type) => {
        if (type === "project") {
            handleCompClose();
            setModalProject(true);
        } else {
            handleProjectClose();
            setModalComp(true);
        }
        setSelectProject(pro);
    }

    return (
        <Container id="Projects">
            <Row className="section">
                <h1 style={{ textAlign: "center" }}>Projects</h1>
                <h2>Featured</h2>
                <Row>
                    {_PORTFOLIO._PROJECT.map((pro) => {
                        return <Col onClick={() => modalFunc(pro, "project")} xs={12} md={6} lg={4} key={pro.id} style={{ marginBottom: "10px" }}>
                            <Card className="h-100 d-flex flex-column project-card" style={{ padding: "10px" }}>
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
            <Modal size="md" show={modalProject} onHide={handleProjectClose} aria-labelledby="contained-modal-title-vcenter" centered>
                {selectProject ? <>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectProject.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image style={{ height: "250px", objectFit: "cover" }} variant="top" src={selectProject.logoURL} />
                        <br /><br />
                        <p>Date: {selectProject.date}</p>
                        <p>Summary: {selectProject.summary}</p>
                        <p>{selectProject.others}</p>
                        <p>Tech Stack: {selectProject.techstack}</p>
                        <p>Team: {selectProject.team}</p>
                    </Modal.Body>
                </> : " "}
            </Modal>

            <Row className="section">
                <h2>Competition Awards</h2>
                <Row>
                    {_PORTFOLIO._COMPETITION.map((comp) => {
                        return <Col onClick={() => modalFunc(comp, "comp")} xs={12} md={6} lg={4} key={comp.id} style={{ marginBottom: "10px" }}>
                            <Card className="h-100 d-flex flex-column project-card" style={{ padding: "10px" }}>
                                <Card.Img style={{ height: "200px", objectFit: "cover" }} variant="top" src={comp.logoURL} />
                                <Card.Body className="flex-grow-1">
                                    <Card.Title>{comp.name} </Card.Title>
                                    <Card.Title style={{fontStyle: "italic"}}>{comp.award}</Card.Title>
                                    <Card.Text>{comp.date}</Card.Text>
                                    <Card.Text>{comp.summary}</Card.Text>
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
            <Modal size="md" show={modalComp} onHide={handleCompClose} aria-labelledby="contained-modal-title-vcenter" centered>
                {selectProject ? <>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectProject.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image style={{ height: "250px", objectFit: "cover" }} variant="top" src={selectProject.logoURL} />
                        <br />
                        <br />
                        <h5 style={{fontStyle: "italic"}}>{selectProject.award}</h5>
                        <p>Issued by: {selectProject.issueby}</p>
                        <p>Date: {selectProject.date}</p>
                        <p>Summary: {selectProject.detail} {selectProject.summary}</p>
                        <p>Tech Stack: {selectProject.techstack}</p>
                        <p>Team: {selectProject.team}</p>
                        {selectProject.media ? <p className="AM-light">Media: {selectProject.media.map((set) => {
                            return <>
                                | <a rel="noreferrer" target="_blank" href={set[1]}>{set[0]}</a> |
                            </>
                        })}</p> : ""}
                    </Modal.Body>
                </> : " "}
            </Modal>
        </Container>
    )
}

export default Project;