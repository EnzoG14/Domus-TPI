import React, { Component,useState } from 'react';
import './PropMod.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

class PropMod extends Component {
  

  constructor(props) {
    super(props);
    this.state = { 
     };

    }

    render() {
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={this.props.imagen} className="ImgPropiedad"/>
    <Card.Body>
        <Card.Title>{this.props.direccion}</Card.Title>
        <Card.Text>
        {this.props.descripcion}
        </Card.Text>
        {/* <Card.Text>{this.props.precio}</Card.Text> */}
        <Button variant="outline-dark" href="/visualizarPropiedadEmpMarketing" className="mb-2">Visualizar propiedad</Button>
        <Button variant="outline-dark" href="/actualizarPropiedades" >Actualizar presentación</Button>
    </Card.Body>
    </Card>
  );
  }
}

export default PropMod;
