import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../resources/wncc_logo_white.png';
import {Link} from "react-router-dom";
export default class 
 extends Component {
  render() {
    return (
      <div>
          <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="https://wncc-iitb.org/"><img className="logo-wncc" src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link Link to="/">Home</Nav.Link>
            <Nav.Link Link to="/dapp">dApp</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
}
