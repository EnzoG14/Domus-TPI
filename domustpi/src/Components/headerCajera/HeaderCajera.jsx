import React from 'react';
import './HeaderCajera.css';
import {BsFillPersonFill} from "react-icons/bs"
import {Navbar, Nav, Button} from 'react-bootstrap';

const HeaderCajera = () => {
    return (
  <Navbar className="color-navS" expand="lg">
        <Navbar.Brand href="/cajasCajera" className='start-0'>
          <img src={require('./src/DomusLogoEmpleados.png')} alt='logo' class='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav end-0">
          <Nav className="me-auto">
            <Nav.Link href="/cajasCajera">Cajas</Nav.Link>
            <Nav.Link href="/entSalCajera">Entradas y Salidas</Nav.Link>
            <Nav.Link href="/transaccionesCajera">Transacciones</Nav.Link>
          </Nav>
          <Nav className="wrapInicio">
          <Button className="btn-customize top-1 end-0" href="/perfilCajera">
          <BsFillPersonFill size="1.5rem"/> Cajera</Button>
          </Nav>
        </Navbar.Collapse>
  </Navbar>
  );
}

export default HeaderCajera;