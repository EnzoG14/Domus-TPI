import React from 'react';
import './EncabezadoTransaccion.css';
import Table from 'react-bootstrap/Table';
import {Container} from 'react-bootstrap';

const EncabezadoTransaccion = () => {
    const Transacciones=['a','a','a','a','a','a','a','a','a','a','a']
    return (
    <Container>
    <Table striped bordered hover>
    <thead>
        <tr>
        <th>Fecha Movimiento</th>
        <th>Tipo de Movimiento</th>
        <th>Monto del Movimiento</th>
        </tr>
    </thead>
    <tbody>
    {Transacciones.map(Transaccion=>(
              
                    
            <tr>
            <td>22/05/2022</td>
            <td>Pago por alquiler</td>
            <td>$20.000,00</td>
            </tr>
        

            ))}
    </tbody> 

    </Table>
    </Container>
  );
}

export default EncabezadoTransaccion;