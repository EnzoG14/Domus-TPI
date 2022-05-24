import React from 'react';
import './EncabezadoTransaccion.css';
import Table from 'react-bootstrap/Table'

// Este componenete se podria borrar

const ComponenteTransaccion = () => {
    return (
        <Table striped bordered hover class="table">
        <tbody>
            <tr>
            <td>22/05/2022</td>
            <td>Pago por alquiler</td>
            <td>$20.000,00</td>
            </tr>
        </tbody>
        </Table>
  );
}

export default ComponenteTransaccion;
