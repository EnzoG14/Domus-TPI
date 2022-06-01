import React from 'react';
import './ComponenteReportes.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const ComponenteReporteTransacciones = () => {
    const ReportesVentas=['a','a','a','a','a','a','a','a','a','a','a']
    return (
      <div className="cajaReporte">
            
      <Container className="containerReporte">
      <Table striped bordered hover>
      <thead>
          <tr>
          <th>Fecha Movimiento</th>
          <th>Codigo Mov.</th>
          <th>Tipo Movimiento</th>
          <th>Monto del Movimiento</th>
          </tr>
      </thead>
      <tbody>
      {ReportesVentas.map(ReporteVentas=>( 
              <tr>
              <td>23/04/2022</td>
              <td>001</td>
              <td>Pago por Alquiler</td>
              <td>$25.000,00</td>
              </tr>
              ))}
      </tbody> 

      </Table>
      </Container>
    </div>
  );
}

export default ComponenteReporteTransacciones;