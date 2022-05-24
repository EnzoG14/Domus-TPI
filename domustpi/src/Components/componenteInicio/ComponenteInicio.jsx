import React from 'react';
import './ComponenteInicio.css';
import {Card, Container, FormControl, Button, Form, Stack } from 'react-bootstrap';
import GrupoBotones from './GrupoBotones'

const ComponenteInicio = () => {
    return (
      <Card className="text-white fondo">
         <Card.Img className='imgInicio' src={require('./src/fondoo.png')} alt="edificios" />
         <Card.ImgOverlay>  
           {/* Arreglar imagen y agregar propiedades destacadas */}
           <Container className='color-nav1'>
            <Card.Title class="wrapTitulo">Encontrá tu Lugar</Card.Title>
              <Stack direction="horizontal" gap={3}>
                  <GrupoBotones></GrupoBotones>
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <Form.Select aria-label="Default select example">
                        <option>Departamento</option>
                        <option>Casa</option>
                        <option>Oficina Comercial</option>
                        <option>Local Comercial</option>
                </Form.Select>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Ubicacion"
                    className="me-2"
                    aria-label="Ubicacion"
                  />
                  <Button variant="primary">Buscar</Button></Form>
              </Stack>
           </Container>
         </Card.ImgOverlay>
      </Card>
  );
}

export default ComponenteInicio;

//export 'default' (imported as 'Header') was not found in './Componentes/Header.jsx' (module has no exports)