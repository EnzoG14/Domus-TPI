import React from 'react';
import './Header.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';


const Header = () => {
    return (
  <Navbar className="color-nav" expand="lg">
        <Navbar.Brand href="/" className='start-0'>
          <img src={require('./src/DomusLogo.png')} alt='logo' class='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/catalogo">Propiedades</Nav.Link>
            <Nav.Link href="/quienessomos">Quienes somos</Nav.Link>
            <Nav.Link href="/secretariaDC">Cambiar vista</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="wrapInicio">
          <Button className="top-1 end-0" href="/iniciarsesion">Iniciar Sesion</Button>
        </Nav>
  </Navbar>
  );
}

export default Header;

//export 'default' (imported as 'Header') was not found in './Componentes/Header.jsx' (module has no exports)