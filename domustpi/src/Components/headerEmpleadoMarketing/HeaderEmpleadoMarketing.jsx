import React from 'react';
import './HeaderEmpleadoMarketing.css';
import {BsFillPersonFill} from "react-icons/bs"
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

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
          <Button className="btn-customize top-1 end-0" href="/perfilEmpMarketing">
          <BsFillPersonFill size="1.5rem"/> Emp. Marketing</Button>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default HeaderEmpleadoMarketing;