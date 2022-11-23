import React from "react";
import {Navbar, Nav, Button, Dropdown} from 'react-bootstrap'
import './ComponenteHeader.css'
import {BsFillPersonFill} from 'react-icons/bs'


function ComponenteHeader(props){
    const estadoPantalla = props.estadoPantalla
    const links = props.links
    const usuario = props.usuario

    return (
    <Navbar className={props.claseNav} expand="lg">
        <Navbar.Brand href="" className="start-0">
            {estadoPantalla === "clientes" || estadoPantalla === "cliente" ? <img src={require('./src/DomusLogo.png')} alt='logo' class='logo'/> :null}
            {estadoPantalla === "usuario" ? <img src={require('./src/DomusLogoEmpleados.png')} alt='logo' class='logo' />:null }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav end-0">
            <Nav className="me-auto">
            {links.map(links => 
            <Nav.Link href={links.href}>{links.nombre}</Nav.Link>)}
            </Nav>
            <Nav className="wrapInicio">
            {estadoPantalla ==="clientes" || estadoPantalla ==="usuario" ? 
            <Dropdown className="">
                <Dropdown.Toggle className={props.claseBoton} id="dropdown-menu-align-responsive-1" >
                <BsFillPersonFill size="1.5rem"/> {usuario} {'\u00A0'}   
                </Dropdown.Toggle>
                <Dropdown.Menu align={{ lg: 'end' }}>
                <Dropdown.Item href={usuario}>Perfil</Dropdown.Item>
                <Dropdown.Item href="/">Cerrar Sesion</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>: null}
            {estadoPantalla ==="cliente" ? 
            <Button className={props.claseBoton} href="/iniciarSesion">Iniciar Sesion</Button>:null}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}
export default ComponenteHeader

