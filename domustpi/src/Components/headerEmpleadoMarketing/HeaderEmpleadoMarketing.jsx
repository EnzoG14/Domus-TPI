import React from 'react';
import './HeaderEmpleadoMarketing.css';
import {BsFillPersonFill} from "react-icons/bs"
import {Navbar, Nav, Container, Button, Dropdown} from 'react-bootstrap';

const HeaderEmpleadoMarketing = () => {
    return (
  <Navbar className="color-navS" expand="lg">
        <Navbar.Brand href="/catalogoEmpMarketing" className='start-0'>
          <img src={require('./src/DomusLogoEmpleados.png')} alt='logo' class='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav end-0">
          <Nav className="me-auto">
            <Nav.Link href="/catalogoEmpMarketing">Catalogo</Nav.Link>
          </Nav>
          <Nav className="wrapInicio">
          <Dropdown className="btn-customize top-1 end-0">
          <Dropdown.Toggle className="btn-customize" id="dropdown-menu-align-responsive-1" >
          <BsFillPersonFill size="1.5rem"/> Emp Marking {'\u00A0'}   
          </Dropdown.Toggle>

          <Dropdown.Menu align={{ lg: 'end' }}>
            <Dropdown.Item href="/perfilEmpMarketing">Perfil</Dropdown.Item>
            <Dropdown.Item href="/">Cerrar Sesion</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default HeaderEmpleadoMarketing;