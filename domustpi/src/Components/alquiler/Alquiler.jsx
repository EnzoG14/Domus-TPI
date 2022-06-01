import React from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {Row, Col, Button} from 'react-bootstrap';


const Alquiler = () => {
    return (
        <Form>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Código del Cliente">
                <Form.Control type="number" placeholder="CodC"/>
                </FloatingLabel>
            </Col>
            <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Mes y Año">
                <Form.Control type="month" placeholder="mesyaño"/>
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
                    <option value="3">Tarjeta de Crédito</option>
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

export default Alquiler;