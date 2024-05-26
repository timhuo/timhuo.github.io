import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from '../img/logo.png';

import {
    Instagram,
} from "react-bootstrap-icons";
import "../css/NavbarComponent.css";

const NavbarComponent = () => {
    return (
        <Navbar id="navbar" fixed="top">
            <Col>
                <Row id="navbar-mobile" className="w-100 justify-content-evenly align-items-center">
                    <Col className="text-center">
                        <a style={{color: 'black'}} href="https://www.instagram.com/hiteahawaii/" target="_blank" rel="noopener noreferrer"><Instagram size={30} /></a>
                    </Col>
                    <Col className="text-center">
                        <Image id="logo" src={logo} alt="Logo" />
                    </Col>
                    <Col className="text-center">
                        <button className="sec-color"><a style={{color: 'black', textDecoration: 'none'}} href="https://www.clover.com/online-ordering/hitea-cafe-honolulu" target="_blank" rel="noopener noreferrer">ORDER ONLINE</a></button>
                    </Col>
                </Row>
                <Row className="w-100 d-flex justify-content-center align-items-center">
                    <Nav className='justify-content-center w-100'>
                        <Nav.Link className='nav-link' href="#home">HOME</Nav.Link>
                        <Nav.Link className='nav-link' href="#menu">MENU</Nav.Link>
                        <Nav.Link className='nav-link' href="#location">LOCATION</Nav.Link>
                        <Nav.Link className='nav-link' href="#about">ABOUT</Nav.Link>
                    </Nav>
                </Row>
            </Col>
        </Navbar>
    )
}

export default NavbarComponent;