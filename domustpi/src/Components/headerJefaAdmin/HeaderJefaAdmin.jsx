import React from 'react';
import './HeaderJefaAdmin.css';
import {BsFillPersonFill} from "react-icons/bs"
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

const HeaderJefaAdmin = () => {
    return (
  <Navbar className="color-navS" expand="lg">
        <Navbar.Brand href="/" className='start-0'>
          <img src={require('./src/DomusLogoEmpleados.png')} alt='logo' class='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav end-0">
          <Nav className="me-auto">
            <Nav.Link href="/">Transacciones</Nav.Link>
            <Nav.Link href="/catalogo">Clientes</Nav.Link>
            <Nav.Link href="/reportes">Reportes</Nav.Link>
          </Nav>
          <Nav className="wrapInicio">
          <Button className="btn-customize top-1 end-0" href="/perfilJefaAdmin"> 
          <BsFillPersonFill size="1.5rem"/> Jefa Administración</Button>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default HeaderJefaAdmin;