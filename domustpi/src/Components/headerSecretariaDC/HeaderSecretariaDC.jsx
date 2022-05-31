import React from 'react';
import './HeaderSecretariaDC.css';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';


const HeaderSecretariaDC = () => {
    return (
  <Navbar className="color-navS" expand="lg">
    <Container class='navBar'>
      <Navbar.Brand href="/Clientes">
        <img src={require('./src/DomusLogoEmpleados.png')} alt='logo' class='logo'/>
     </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="me-auto">
        <Nav.Link href="/Clientes">Clientes</Nav.Link>
        <Nav.Link href="/secretariaDC">Agenda</Nav.Link>
        <Nav.Link href="/modificarCatalogo">Catalogo</Nav.Link>
        <Nav.Link href="/transacciones">Transacciones</Nav.Link>
        <Nav.Link href="/usuarios">Usuarios</Nav.Link>
        <Nav.Link href="/reportes">Reportes</Nav.Link>
        <Nav.Link href="/catalogo">Cambiar vista</Nav.Link>
        <Button className="btn-customize position-absolute top-1 end-0" href="/solicitudes">Solicitudes</Button>
      </Nav>
      </Container>
  </Navbar>
  );
}

export default HeaderSecretariaDC;