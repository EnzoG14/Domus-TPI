import React, { Component,useState } from 'react';
import './PropModJefaComer.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

class PropModJefaComer extends Component {
  

  constructor(props) {
    super(props);
    this.state = { 
     };

    }

    render() {
    return (
    <Card style={{ width: '18rem' }}>
    <FloatingLabel controlId="floatingSelect" label="Estado de disponibilidad">
          <Form.Select aria-label="Floating label select example" disabled readOnly>
            <option value="1">Disponible</option>
          </Form.Select>
    </FloatingLabel>
    <Card.Img variant="top" src={this.props.imagen} className="ImgPropiedad"/>
    <Card.Body>
        <Card.Title>{this.props.direccion}</Card.Title>
        <Card.Text>
        {this.props.descripcion}
        </Card.Text>
        {/* <Card.Text>{this.props.precio}</Card.Text> */}
        <Button variant="outline-dark" href="/visualizarPropiedadesJefaComer" className="mb-2">Visualizar propiedad</Button>
    </Card.Body>
    </Card>
  );
  }
}

export default PropModJefaComer;
