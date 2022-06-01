import React from 'react';
import {Stack,FloatingLabel,Form} from 'react-bootstrap';

const RangoFecha = () => {
    return (
      <Stack direction="horizontal" gap={3} className="col-md-5 mx-4 my-5">
          <FloatingLabel controlId="floatingInputGrid" label="Desde">
            <Form.Control type="date" placeholder="Fecha desde" />
          </FloatingLabel>
          <div className="vr" />
          <FloatingLabel controlId="floatingInputGrid" label="hasta">
              <Form.Control type="date" placeholder="Fecha hasta" />
            </FloatingLabel>
      </Stack>
  );
}

export default RangoFecha;