import React from 'react';
import './HeaderAgenteInmobiliarios.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

const HeaderAgentesInmobiliarios = () => {
    return (
  <Navbar className="color-navS" expand="lg">
        <Navbar.Brand href="/" className='start-0'>
          <img src={require('./src/DomusLogoEmpleados.png')} alt='logo' class='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav end-0">
          <Nav className="me-auto">
            <Nav.Link href="/catalogoAgenteInmobiliario">Propiedades</Nav.Link>
            <Nav.Link href="/calendarioAgenteInmobiliario">Agenda</Nav.Link>
            <Nav.Link href="/calendarioAgenteInmobiliario">Agenda</Nav.Link>
            <Nav.Link href="/secretariaDC">Cambiar vista</Nav.Link>
          </Nav>
          <Nav className="wrapInicio">
          <Button className="btn-customize top-1 end-0" href="/iniciarsesion">Iniciar Sesion</Button>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default HeaderAgentesInmobiliarios;