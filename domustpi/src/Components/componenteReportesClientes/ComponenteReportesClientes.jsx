import React from 'react';
import './ComponenteReportes.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const ComponenteReportesClientes = () => {
    const ReportesClientes=['a','a','a','a','a','a','a','a','a','a','a']
    return (
      <div className="cajaReporte">
            <div className="tipoReporte">
              <Form.Label className="tipoReporte">Tipo de Cliente: <div className="paginaReporte"> Inquilino </div> </Form.Label>
          </div>
      <Container className="containerReporte">
      <Table striped bordered hover>
      <thead>
          <tr>
          <th>Nro Cliente</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DNI</th>
          <th>Teléfono</th>
          <th>Email</th>
          <th>Dirección</th>
          <th>Localidad</th>
          </tr>
      </thead>
      <tbody>
      {ReportesClientes.map(ReporteClientes=>(
                
                      
              <tr>
              <td>269</td>
              <td>Ricardo</td>
              <td>Machardo</td>
              <td>44.444.444</td>
              <td>3794933651</td>
              <td>ricmachardo@gmail.com</td>
              <td>Rivadavia 525</td>
              <td>Resistencia</td>
              </tr>
              ))}
      </tbody> 

      </Table>
      </Container>
      <div className="cajaSubtotalReporte">
        <Form.Label className="cajaSubtotalReporte">Cantidad de Clientes: <div className="subtotalReporte"> 11 </div> </Form.Label>
      </div>
    </div>
  );
}

export default ComponenteReportesClientes;