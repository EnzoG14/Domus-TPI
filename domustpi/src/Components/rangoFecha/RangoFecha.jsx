import React from 'react';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {Row, Col} from 'react-bootstrap';

const RangoFecha = () => {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: "0.5%"}}>
        <Row className="g-2">
          <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Desde">
              <Form.Control type="date" placeholder="Fecha desde" />
            </FloatingLabel>
          </Col>
          <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="hasta">
              <Form.Control type="date" placeholder="Fecha hasta" />
            </FloatingLabel>
          </Col>
        </Row>
      </div>
  );
}

export default RangoFecha;