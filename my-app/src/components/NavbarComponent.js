import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "../css/NavbarComponent.css";
import _PORTFOLIO from "../Portfolio.js";

const NavbarComponent = () => {
    return (
        <Navbar id="navbar" fixed="top">
            <Container>
                <Navbar.Brand className='nav-link' href="#home">{_PORTFOLIO._BIO.name}</Navbar.Brand>
                <Nav className="justify-content-end" >
                    <Nav.Link className='nav-link' href="#AboutMe">About Me</Nav.Link>
                    <Nav.Link className='nav-link' href="#Experience">Experience</Nav.Link>
                    <Nav.Link className='nav-link' href="#Projects">Projects</Nav.Link>
                    {/* <Nav.Link className='nav-link' href="#">Papers</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;