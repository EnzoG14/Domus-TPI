import React from 'react';
import Form from 'react-bootstrap/Form'
import {Row, Col, Button} from 'react-bootstrap';


const NuevaPropiedad = () => {
    return (
        <Form>
            <Form.Group as={Row} className="mb-3 pt-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Tipo
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Tipo" />
                </Col>
            </Form.Group>
            {/* <Form.Select aria-label="Default select example">
                        <option>Departamento</option>
                        <option>Casa</option>
                        <option>Chalet</option>
                        <option>Local Comercial</option>
                        <option>Casa con local</option>
                        <option>Cabaña</option>
                        <option>Cochera</option>
            </Form.Select> */}
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Ubicacion
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Ubicacion" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Cantidad de baños
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Cantidad de baños" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Cantidad de dormitorios
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Cantidad de dormitorios" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Cantidad de suites
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Cantidad de suites" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Antigüedad 
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Antigüedad" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Cantidad espacios
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Cantidad espacios" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Artefactos con los que cuenta
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Artefactos con los que cuenta" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Numero del cliente
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="number" placeholder="Numero del cliente" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Tipo de cliente
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Tipo de cliente" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Nombre/s
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Nombre/s" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Apellido/s
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Apellido/s" />
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
                Telefono de contacto
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Telefono de contacto" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Correo electrónico
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Correo electrónico" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Direccion
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Direccion" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Opciones de contrato
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Opciones de contrato" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Precio total del inmueble
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Precio total del inmueble" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Breve descripción de la propiedad
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Breve descripción de la propiedad" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Descripción detallada de la propiedad
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="string" placeholder="Descripción detallada de la propiedad" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button className="btn-customize" type="submit">Confirmar Registro</Button>
                </Col>
            </Form.Group>
        </Form>
  );
}

export default NuevaPropiedad;