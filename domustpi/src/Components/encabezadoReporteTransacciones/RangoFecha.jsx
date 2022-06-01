import React from 'react';

import {Stack,FloatingLabel,Form,Dropdown} from 'react-bootstrap';

const RangoFecha = () => {
    return (
      <Stack direction="horizontal" gap={3} className="mx-4 my-2">
          <FloatingLabel controlId="floatingInputGrid" label="Desde" >
            <Form.Control type="date" placeholder="Fecha desde"  />
          </FloatingLabel>
          <div className="vr" />
          <FloatingLabel controlId="floatingInputGrid" label="Hasta" >
              <Form.Control type="date" placeholder="Fecha hasta"  />
          </FloatingLabel>
          <div className="vr" />
          <Dropdown autoClose={false}>
            <Dropdown.Toggle className="outline-customize" id="dropdown-autoclose-outside">
                Tipo
            </Dropdown.Toggle >

            <Dropdown.Menu align="end">
        <Form className="px-2 w-20">
        <Form.Check 
        type="checkbox"
        label={`Caja de Alquiler`}
        />
        <Form.Check 
        type="checkbox"
        label={`Caja de Ventas`}
        />
        <Form.Check 
        type="checkbox"
        label={`Entradas/Salidas`}
        />
        </Form>
  
            </Dropdown.Menu>
          </Dropdown>
      </Stack>
  );
}

export default RangoFecha;