import React from 'react';
import './HeaderAgenteInmobiliarios.css';
import {BsFillPersonFill} from "react-icons/bs"
import {Navbar, Nav, Dropdown} from 'react-bootstrap';

const HeaderAgentesInmobiliarios = () => {
    return (
  <Navbar className="color-navS" expand="lg">
        <Navbar.Brand href="/calendarioAgenteInmobiliario" className='start-0'>
          <img src={require('./src/DomusLogoEmpleados.png')} alt='logo' class='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav end-0">
          <Nav className="me-auto">
            <Nav.Link href="/catalogoAgenteInmobiliario">Catalogo</Nav.Link>
            <Nav.Link href="/calendarioAgenteInmobiliario">Agenda</Nav.Link>
          </Nav>
          <Nav className="wrapInicio">
          <Dropdown className="btn-customize top-1 end-0">
          <Dropdown.Toggle className="btn-customize" id="dropdown-menu-align-responsive-1" >
          <BsFillPersonFill size="1.5rem"/> Agente Inmobiliario {'\u00A0'}   
          </Dropdown.Toggle>

          <Dropdown.Menu align={{ lg: 'end' }}>
            <Dropdown.Item href="/PerfilAgenteInm">Perfil</Dropdown.Item>
            <Dropdown.Item href="/">Cerrar Sesion</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default HeaderAgentesInmobiliarios;