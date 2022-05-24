import React, { Component } from 'react';
import './Propiedad.css';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';


class Propiedad extends Component {

  constructor(props) {
    super(props);
    this.state = {  }
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
        <Card.Text>{this.props.precio}</Card.Text>
        <Button variant="outline-dark" href="/ventapropiedad" >Visualizar Propiedad</Button>
    </Card.Body>
    </Card>
  );
  }
}

export default Propiedad;
