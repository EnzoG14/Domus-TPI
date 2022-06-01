import React from 'react';
import Form from 'react-bootstrap/Form'
import {Row, Col, Button} from 'react-bootstrap';

const ClienParticular = () => {
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
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                DNI
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="DNI" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                CUIT/CUIL
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="CUIT/CUIL" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Fecha de nacimiento
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="date" placeholder="Fecha de nacimiento" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Número de teléfono
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Número de teléfono" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Correo electrónico
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Correo electrónico" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>Documento</Form.Label>
            <Col sm={10}>
            <Form.Control
              type="file"
              required
              name="Documento"
            />
            </Col>
          </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" className="btn-customize btn">Confirmar Registro</Button>
                </Col>
            </Form.Group>
        </Form>
  );
}

export default ClienParticular;