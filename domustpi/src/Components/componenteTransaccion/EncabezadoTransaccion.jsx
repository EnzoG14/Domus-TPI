import React from 'react';
import './EncabezadoTransaccion.css';
import RangoFecha from './RangoFecha';
import {Container,Table,Stack} from 'react-bootstrap';

const EncabezadoTransaccion = () => {
    const Transacciones=['a','a','a','a','a','a','a','a','a','a','a']
    return (
    <Container>
        <Stack direction="horizontal" gap={1}>
            <h2>Ingrese un rango de fecha</h2>
        <RangoFecha/>
            
        </Stack>
    <Table striped bordered hover>
    <thead className="bg-customize">
        <tr>
        <th>Fecha Movimiento</th>
        <th>Codigo</th>
        <th>Tipo de Movimiento</th>
        <th>Monto del Movimiento</th>
        </tr>
    </thead>
    <tbody>
    {Transacciones.map(Transaccion=>(
              
                    
            <tr>
            <td>22/05/2022</td>
            <td>0000</td>
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