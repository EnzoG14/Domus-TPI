import React from 'react';
import './ComponenteReportes.css';
import {FormControl, Form, Container, Row, Col } from 'react-bootstrap';
const EncabezadoReportesClientes = () => {
    return (
        <div>
        <Container className= "containerEncabezadoReportes">
                <Row className="cajaEncabezadoReportes">
                        <Form.Label column="lg" lg={2} className="TituloResumen">
                        RESUMEN DE CLIENTES DE
                        </Form.Label>
                        <Col className="MesYAñoReportes">
                        <Form.Control type="month" placeholder="MY" className="MesYAñoReportes"/>
                        </Col>

                </Row>
        </Container>
        <div className="paginacionReporte">
                <Form.Label className="paginacionReporte">Página: <div className="paginaReporte"> 1 </div> - <div className="paginaReporte"> 13 </div> </Form.Label>
        </div>
        </div>
  );
}

export default EncabezadoReportesClientes;