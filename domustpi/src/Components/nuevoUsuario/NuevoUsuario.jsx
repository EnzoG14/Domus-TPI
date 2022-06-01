import React from 'react';
import Form from 'react-bootstrap/Form'
import {Row, Col, Button} from 'react-bootstrap';


const nuevoUsuario = () => {
    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Nombre/s
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Nombre/s" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Apellido/s
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Apellido/s" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Puesto de Trabajo
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Puesto de Trabajo" />
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
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Teléfono alternativo
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Teléfono alternativo" />
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
                Nombre de usuario
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Nombre de usuario" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Contraseña
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Contraseña" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" className="btn-customize">Confirmar Registro</Button>
                </Col>
            </Form.Group>
        </Form>
  );
}

export default nuevoUsuario;