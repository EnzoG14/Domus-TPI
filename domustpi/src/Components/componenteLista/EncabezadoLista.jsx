import React from 'react';
import './EncabezadoLista.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

class EncabezadoLista extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  }
    }
    
    render(){
    const Usuarios=['a','a','a','a','a','a','a','a','a','a','a']
    return (
    <Container>
    <Table striped bordered hover>
    <thead>
        <tr>
        <th>#</th>
        <th>Nombre(s)</th>
        <th>Apellidos(s)</th>
        <th>Username</th>
        <th>--------</th>
        </tr>
    </thead>
    <tbody>
    {Usuarios.map(Usuario=>(
              
                    
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td className='wrapBotones'>
            <Stack direction="horizontal" className="alignItem" > 
            <Button className="pull-right" variant="danger" href="">Dar baja</Button>
            {this.props.mostrar === "si" ? <Button className="pull-right" variant="warning" href="">Modificar</Button>:null }
            </Stack>
            </td>
            </tr>
            ))}
    </tbody> 

    </Table>
    </Container>
  );
}
}
export default EncabezadoLista;