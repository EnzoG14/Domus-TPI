import React from 'react';
import Form from 'react-bootstrap/Form'
import {Row, Col, Button} from 'react-bootstrap';

const actualizarPresentacion = () => {
    return (
        <Form className="mt-2">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>Imagenes</Form.Label>
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
                <Button type="submit" className="btn-customize">Confirmar Cambio</Button>
                </Col>
            </Form.Group>
        </Form>
  );
}

export default actualizarPresentacion;