import React, { Component, useState } from 'react';
import { Nav,Navbar,Container,NavDropdown,Form,FormControl,Dropdown, InputGroup, Button} from 'react-bootstrap';
import './HeaderCatalogo.css';
import {BiSearchAlt} from "react-icons/bi"

function HeaderCatalogo () {
    
    const [nombreDropdown1 , setnombreDropdown1] = useState("Ambientes/Dormitorios");
    const [nombreDropdown2 , setnombreDropdown2] = useState("Operacion");
    const [nombreDropdown3 , setnombreDropdown3] = useState("Propiedad");


    return (  
            <Navbar bg='primary' className="posNav">
                <Container className="header2">
                    <FormControl
                        type="search"
                        placeholder="Ubicacion"
                        className="barraUbicacion"
                        aria-label="Search"/>
                    <Dropdown align="end" className="d-inline mx-2" autoClose={true} size="lg">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                            {nombreDropdown2}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown2("Comprar")}>Comprar</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown2("Alquilar")}>Alquilar</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown align="end" className="d-inline mx-2" autoClose={true} size="lg">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                            {nombreDropdown3}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown3("Departamento")}>Departamento</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown3("Casa")}>Casa</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown3("Oficina Comercial")}>Oficina Comercial</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown3("Local Comercial")}>Local Comercial</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>    
                    <Dropdown align="end" className="d-inline mx-2" autoClose={true} size="lg">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                            {nombreDropdown1}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown1("Monoambiente")}>Monoambiente</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown1("2 Dormitorios")}>2 Dormitorios</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={()=>setnombreDropdown1("3 Dormitorios")}>3 Dormitorios</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="primary" size="lg" href="#" className="d-inline mx-2 botonBuscar">
                        <BiSearchAlt size="1.5rem"/> Buscar
                    </Button>
                    </Container>
            </Navbar>
        );
    }
 
export default HeaderCatalogo;