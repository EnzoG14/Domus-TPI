import React from 'react';
import './EncabezadoEyS.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

// Encabezado Entrada y salida
const EncabezadoEyS = () => {
    const EySs=['a','a','a','a','a','a','a','a','a','a','a']
    return (
    <Table striped bordered hover>
    <thead>
        <tr>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Concepto</th>
        <th>Monto</th>
        </tr>
    </thead>
    <tbody>
    {EySs.map(EyS=>(
              
                    
            <tr>
            <td>21/05/2022</td>
            <td>16:20</td>
            <td>Pago por alquiler</td>
            <td>$25.000,00</td>
            <td className='wrapBotones'>
            <Stack direction="horizontal" className="alignItem" > 
            <Button className="pull-right" variant="success" href="">Entrada</Button>
            <Button className="pull-right" variant="danger" href="">Salida</Button>
            </Stack>
            </td>
            </tr>
            ))}
    </tbody> 

    </Table>
  );
}

export default EncabezadoEyS;