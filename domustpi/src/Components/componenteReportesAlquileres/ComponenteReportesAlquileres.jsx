import React from 'react';
import './ComponenteReportes.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const ComponenteReportesAlquileres = () => {
    const ReportesAlquileres=['a','a','a','a','a','a','a','a','a','a','a']
    return (
      <div className="cajaReporte">
            <div className="tipoReporte">
              <Form.Label className="tipoReporte">Tipo de Inmueble: <div className="paginaReporte"> Departamento </div> </Form.Label>
          </div>
      <Container className="containerReporte">
      <Table striped bordered hover>
      <thead>
          <tr>
          <th>Nro Inmueble</th>
          <th>Localidad</th>
          <th>Dirección</th>
          <th>Propietario</th>
          <th>Inquilino</th>
          <th>Agente</th>
          <th>Fecha</th>
          <th>Contrato</th>
          <th>Precio</th>
          </tr>
      </thead>
      <tbody>
      {ReportesAlquileres.map(ReportesAlquileres=>(
                
                      
              <tr>
              <td>421</td>
              <td>Corrientes</td>
              <td>Moreno 523</td>
              <td>Carlos Lopez</td>
              <td>Lucas Paulinez</td>
              <td>Diego Gomez</td>
              <td>23/04/2022</td>
              <td>NroC 12345678</td>
              <td>$400.000,00</td>
              </tr>
              ))}
      </tbody> 

      </Table>
      </Container>
      <div className="cajaSubtotalReporte">
        <Form.Label className="cajaSubtotalReporte">Subtotal: $<div className="subtotalReporte"> 4.400.000,00 </div> </Form.Label>
      </div>
    </div>
  );
}

export default ComponenteReportesAlquileres;