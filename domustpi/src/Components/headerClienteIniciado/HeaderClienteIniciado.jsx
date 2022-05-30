import React from 'react';
import './HeaderClienteIniciado.css';
import {BsFillPersonFill} from "react-icons/bs"
import {Navbar, Nav, Container, Button} from 'react-bootstrap';


const HeaderClienteIniciado = () => {
    return (
  <Navbar className="color-nav" expand="lg">
        <Navbar.Brand href="/inicioAutenticado" className='start-0'>
          <img src={require('./src/DomusLogo.png')} alt='logo' class='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav end-0">
          <Nav className="me-auto">
            <Nav.Link href="/inicioAutenticado">Inicio</Nav.Link>
            <Nav.Link href="/catalogoAutenticado">Catalogo</Nav.Link>
            <Nav.Link href="/AdministrarPropiedades">Propiedades</Nav.Link>
            <Nav.Link href="/quienessomos">Quienes somos</Nav.Link>
          </Nav>
          <Nav className="wrapInicio">
          <Button className="top-1 end-0" href="/perfil">
          <BsFillPersonFill size="1.5rem"/> Mi Perfil</Button>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default HeaderClienteIniciado;
