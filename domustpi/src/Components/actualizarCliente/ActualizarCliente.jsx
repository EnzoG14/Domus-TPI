import React from 'react';
import Form from 'react-bootstrap/Form'
import {Row, Col, Button} from 'react-bootstrap';

const ActualizarCliente = () => {
    return (
        <Form className="mt-3">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Apellido/s
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Apellido/s" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Nombre/s
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Nombre/s" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" className="btn-customize btn">Buscar</Button>
                </Col>
            </Form.Group>
        </Form>
  );
}

export default ActualizarCliente;