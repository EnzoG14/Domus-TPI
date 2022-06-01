import React from 'react';
import {Form,Row,Col,Button,Container,Stack} from 'react-bootstrap'

const BannerVentaContacto = () => {

    return(
        <>
        <Stack className="d-grid masthead pb-5 pt-lg-5" gap={2}>
            <Container className="fondoVentas">
                <h5>Completa el formulario y nos pondremos en contacto con usted para continuar con el proceso</h5>
                <Form noValidate className="pl-5">
                <Row className="pl-5 mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre"
                        defaultValue="Mark"
                    />
                    </Form.Group>
                </Row>
                <Row className="pl-5 mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Apellido"
                    defaultValue="Otto"
                />
                </Form.Group>
                </Row>
            <Row className="pl-5 mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Ciudad" required />
                <Form.Control.Feedback type="invalid">
                    Por favor ingrese su ciudad.
                </Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="pl-5 mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom04">
                <Form.Label>Provincia</Form.Label>
                <Form.Control type="text" placeholder="Provincia" required />
                <Form.Control.Feedback type="invalid">
                    Por favor ingrese su provincia.
                </Form.Control.Feedback>
                </Form.Group>
                </Row>
                <Row className="pl-5 mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom05">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control type="text" placeholder="C.P." required />
                <Form.Control.Feedback type="invalid">
                    Por favor ingrese su codigo postal
                </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="pl-5 mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>Numero de Telefono</Form.Label>
                <Form.Control type="number" placeholder="N° Telefono" required />
                </Form.Group>
                </Row>
            <Button className="my-3" type="submit">Enviar Formulario</Button>
                </Form>
        </Container>
        {/* <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="https://redautonomos.es/images/redautonomos/como-montar-inmobiliaria.jpg" alt="..." /></div> */}
    </Stack>   
    </>
    )
}

export default BannerVentaContacto

