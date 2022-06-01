import React from 'react';
import './EncabezadoReportesGerenteGral.css'
import {Stack,FloatingLabel,Form} from 'react-bootstrap';

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
          <FloatingLabel controlId="floatingSelectGrid" label="Tipo">
                <Form.Select aria-label="Floating label select example">
                    <option value="1">Venta</option>
                    <option value="2">Alquiler</option>
                    <option value="3">Clientes</option>
                    <option value="4">Propiedades</option>
                </Form.Select>
                </FloatingLabel>
      </Stack>
  );
}

export default RangoFecha;