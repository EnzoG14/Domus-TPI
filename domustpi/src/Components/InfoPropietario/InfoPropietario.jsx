import React from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {Button, Row, Col} from 'react-bootstrap';
import './InfoPropietario.css';

const InfoPropietario = () => {
    return(
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Tipo Cliente
        </Form.Label>
        <Col sm="10">
          <Form.Control className="contenido" plaintext readOnly defaultValue="Corporativo" />
        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Nro Cliente
        </Form.Label>
        <Col sm="10">
          <Form.Control className="contenido" plaintext readOnly defaultValue="4235" />
        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="10">
          <Form.Control className="contenido" plaintext readOnly defaultValue="Troffeli Inmobiliaria" />
        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control className="contenido" plaintext readOnly defaultValue="contacto@troffeli.com" />
        </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Telefono
        </Form.Label>
        <Col sm="10">
          <Form.Control className="contenido" plaintext readOnly defaultValue="+54 3794314242" />
        </Col>
        </Form.Group>
        
        </Form>
  
        
    )


}

export default InfoPropietario;