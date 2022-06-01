import React from 'react';
import './HeaderSecretariaDC.css';
import {BsFillPersonFill} from "react-icons/bs"
import {Navbar,Nav,Dropdown,Button} from 'react-bootstrap';


const HeaderSecretariaDC = () => {
    return (
      <Navbar className="color-navS" expand="lg">
      <Navbar.Brand href="/clientesJefaAdmin" className='start-0'>
        <img src={require('./src/DomusLogoEmpleados.png')} alt='logo' class='logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav end-0">
        <Nav className="me-auto">
        <Nav.Link href="/Clientes">Clientes</Nav.Link>
        <Nav.Link href="/secretariaDC">Agenda</Nav.Link>
        <Nav.Link href="/modificarCatalogo">Catalogo</Nav.Link>
        <Nav.Link href="/transacciones">Transacciones</Nav.Link>
        <Nav.Link href="/usuarios">Usuarios</Nav.Link>
        <Nav.Link href="/reportes">Reportes</Nav.Link>
        <Nav.Link href="/solicitudes">Solicitudes</Nav.Link>
        <Nav.Link href="/catalogo">Cambiar vista</Nav.Link>
        </Nav>
        <Nav>
        <Dropdown className="btn-customize top-1 end-0">
          <Dropdown.Toggle className="btn-customize" id="dropdown-menu-align-responsive-1" >
          <BsFillPersonFill size="1.5rem"/> Secretaria {'\u00A0'}   
          </Dropdown.Toggle>

          <Dropdown.Menu align={{ lg: 'end' }}>
            <Dropdown.Item href="/perfilSecretaria">Perfil</Dropdown.Item>
            <Dropdown.Item href="/iniciarsesion">Cerrar Sesion</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Nav>
      </Navbar.Collapse>
</Navbar>
  );
}

export default HeaderSecretariaDC;