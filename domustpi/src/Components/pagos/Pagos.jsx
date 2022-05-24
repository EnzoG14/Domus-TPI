import React from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import {Row, Col, Button} from 'react-bootstrap';


const Alquiler = () => {
    return (
        <Row className="g-2">
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Código del Cliente">
                <Form.Control type="number" placeholder="CodC"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Mes">
                <Form.Control type="number" placeholder="mes"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Año">
                <Form.Control type="number" placeholder="año"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Interés por mora">
                <Form.Control type="number" placeholder="interes"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Total a pagar">
                <Form.Control type="number" placeholder="interes"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Forma de pago">
                <Form.Select aria-label="Floating label select example">
                    <option value="1">Efectivo</option>
                    <option value="2">Tarjeta de Débito</option>
                    <option value="2">Tarjeta de Crédito</option>
                </Form.Select>
                </FloatingLabel>
            </Col>
            <Col xs="auto">
                <Button type="submit" className="btn-customize mb-2">
                    Asentar el pago
                </Button>
            </Col>
            <Col xs="auto">
                <Button type="submit" className="btn-customize mb-2">
                    Imprimir recibo
                </Button>
            </Col>
        </Row>
  );
}

export default Alquiler;