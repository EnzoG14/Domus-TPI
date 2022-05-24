import React from 'react';
import './EncabezadoLista.css';
import Table from 'react-bootstrap/Table'

const ComponenteLista = () => {
    return (
        <Table striped bordered hover class="table">
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
        </tbody>
        </Table>
  );
}

export default ComponenteLista;
