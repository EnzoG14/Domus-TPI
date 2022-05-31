import React from 'react';
import './ComponenteReportes.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
const ComponenteReportesPropiedades = () => {
    const ReportesPropiedades=['a','a','a','a','a','a','a','a','a','a','a']
    return (
    <Container>
    <Table striped bordered hover>
    <thead>
        <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
        <th>Username</th>
        </tr>
    </thead>
    <tbody>
    {ReportesPropiedades.map(ReportePropiedades=>(
              
                    
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className='wrapBotones'>
            <Stack direction="horizontal" className="alignItem" > 
            <Button className="pull-right" variant="danger" href="">Dar baja</Button>
            <Button className="pull-right" variant="warning" href="">Modificar</Button>
            </Stack>
            </td>
            </tr>
            ))}
    </tbody> 

    </Table>
    </Container>
  );
}

export default ComponenteReportesPropiedades;