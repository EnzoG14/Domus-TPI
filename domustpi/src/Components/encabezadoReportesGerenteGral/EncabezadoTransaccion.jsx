import React from 'react';
import './EncabezadoTransaccion.css';
import RangoFecha from './RangoFecha';
import {BiSearchAlt} from "react-icons/bi"
import {Container,Table,Button,Stack} from 'react-bootstrap';

const EncabezadoTransaccion = () => {
    const Transacciones=['a','a','a','a','a','a','a','a','a','a','a']
    return (
    <Container>
        <Stack direction="horizontal" gap={3} className="justify-content-center bg-rosita my-3 mx-3">
            <h2>Ingrese un rango de fecha</h2>
            <RangoFecha/>
            <Button className="outline-customizeee" id="button-addon2">
                <BiSearchAlt size="1.5rem"/> Buscar
            </Button>
        </Stack>
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