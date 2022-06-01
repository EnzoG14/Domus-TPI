import React from 'react';
import Form from 'react-bootstrap/Form'
import {Row, Col, Button} from 'react-bootstrap';


const ClienCorporativo = () => {
    return (
        <Form className="mt-3">
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Razón Social
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Razón Social" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Nombre de el/los propietario/s
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Nombre de el/los propietario/s" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                CUIT de la empresa
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="CUIT de la empresa" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Teléfono de contacto
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Teléfono de contacto" />
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
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Dirección de oficina de Administración
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Dirección de oficina de Administración" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Agente Inmobiliario a cargo
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Agente Inmobiliario a cargo" />
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

export default ClienCorporativo;