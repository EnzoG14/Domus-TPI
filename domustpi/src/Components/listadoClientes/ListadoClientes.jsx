import React from 'react';
import './ListadoClientes.css';
import { Table,Button,Container,FormControl,InputGroup} from 'react-bootstrap';
import {BiSearchAlt} from "react-icons/bi"
const ListadoClientes = () => {
    const Usuarios=['a','a','a','a','a','a','a','a','a','a','a']
    return (
    <Container className="my-5">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Codigo de Cliente"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"/>
    <Button className="outline-customize" id="button-addon2">
    <BiSearchAlt size="1.5rem"/> Buscar
    </Button>
  </InputGroup>


    <Table striped bordered hover>
    <thead className="bg-customize">
        <tr>
        <th>#COD</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>CUIL/CUIT</th>
        <th>Fecha Nacimiento</th>
        <th>E-mail</th>
        <th>N° Telefono</th>
        </tr>
    </thead>
    <tbody>
    {Usuarios.map(Usuario=>(        
            <tr>
            <td>0000</td>
            <td>Matias</td>
            <td>Ramirez</td>
            <td>24-34124746-1</td>
            <td>15/08/2000</td>
            <td>email@example.com</td>
            <td>3700-112233</td>
            </tr>
            ))}
    </tbody> 

    </Table>
    </Container>
  );
}

export default ListadoClientes;