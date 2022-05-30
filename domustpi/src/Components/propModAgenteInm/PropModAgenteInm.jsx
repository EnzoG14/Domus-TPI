import React, { Component,useState } from 'react';
import './PropModAgenteInm.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

class PropModAgenteInm extends Component {
  

  constructor(props) {
    super(props);
    this.state = { 
     };

    }

    render() {
    return (
    <Card style={{ width: '18rem' }}>
    <FloatingLabel controlId="floatingSelect" label="Estado de disponibilidad">
          <Form.Select aria-label="Floating label select example">
            <option value="1">Vendida</option>
            <option value="2">Alquilada</option>
            <option value="3">Para Vender</option>
            <option value="3">Para Alquilar</option>
          </Form.Select>
    </FloatingLabel>
    <Card.Img variant="top" src={this.props.imagen} className="ImgPropiedad"/>
    <Card.Body>
        <Card.Title>{this.props.direccion}</Card.Title>
        <Card.Text>
        {this.props.descripcion}
        </Card.Text>
        {/* <Card.Text>{this.props.precio}</Card.Text> */}
        <Button variant="outline-dark" href="/visualizarPropiedadesAgentesInmobiliarios" className="mb-2">Visualizar propiedad</Button>
    </Card.Body>
    </Card>
  );
  }
}

export default PropModAgenteInm;
