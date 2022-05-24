import React, { Component } from 'react';
import { Nav,Navbar,Container,NavDropdown,Form,FormControl} from 'react-bootstrap';
import './HeaderCatalogo.css';
const  HeaderCatalogo  = () => {
        return (  
            <Navbar bg='primary'>
                <Container class='header2'>
                    <Form.Select aria-label="Default select example">
                        <option>Minimo</option>
                        <option value="1">Monoambiente</option>
                        <option value="2">2 ambientes</option>
                        <option value="3">3 ambientes</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example">
                        <option>Maximo</option>
                        <option value="1">Monoambiente</option>
                        <option value="2">2 ambientes</option>
                        <option value="3">3 ambientes</option>
                    </Form.Select>
                </Container>
            </Navbar>
        );
    }

 
export default HeaderCatalogo;