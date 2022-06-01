import React from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

import {Row, Col, Button} from 'react-bootstrap';


const Venta = () => {
    return (
        <Form>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Código de Prop">
                <Form.Control type="number" placeholder="CodP"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingSelectGrid" label="Tipo de Venta">
                <Form.Select aria-label="Floating label select example">
                    <option value="1">Financiada</option>
                    <option value="2">Total</option>
                </Form.Select>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Porcentaje de Comisión">
                <Form.Control type="number" placeholder="PorCom"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Precio">
                <Form.Control type="number" placeholder="precio"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Moneda">
                <Form.Control type="number" placeholder="moneda"/>
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
                <div className="d-grid gap-2 btn-caja mt-2">
                        <Button className="btn-customize" variant="primary" size="lg">
                            Asentar el pago
                        </Button>
                        <Button variant="secondary" size="lg">
                            Imprimir el recibo
                        </Button>
                </div> 
            </Col>
        </Form>
  );
}

export default Venta;