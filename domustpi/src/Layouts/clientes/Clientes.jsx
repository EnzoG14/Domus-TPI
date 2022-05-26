import React from 'react'
import { HeaderSecretariaDC, ClienParticular, ClienCorporativo, ActualizarCliente, FooterGeneral } from '../../Components'
import Button from 'react-bootstrap/Button'
import Link from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

class Clientes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showComponent1: false,
            showComponent2: false,
            showComponent3: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
        this._onButtonClick2 = this._onButtonClick2.bind(this);
        this._onButtonClick3 = this._onButtonClick3.bind(this);
      }

        _onButtonClick3() {
            if (this.state.showComponent3) {
                this.setState({showComponent3: false});
            } else {
                this.setState({showComponent3: true,
                    showComponent2: false,
                    showComponent1: false,});
            }}

        _onButtonClick2() {
            if (this.state.showComponent2) {
                this.setState({showComponent2: false,});
            } else {
                this.setState({showComponent2: true,
                            showComponent1: false,
                            showComponent3: false,});
            }}
      
      
      _onButtonClick() {
            if (this.state.showComponent1) {
            this.setState({showComponent1: false});
            } else {
                this.setState({showComponent1: true,
                    showComponent2: false,
                    showComponent3: false,});
        }}
        
    render(){
    return (
        <>
            <HeaderSecretariaDC />
            
            <Container className="mr-50 ml-50">
            <Stack direction="horizontal" className="alignItem" >
            <Button onClick={this._onButtonClick} variant="primary">Nuevo Cliente</Button>
            <Button onClick={this._onButtonClick2} variant="primary">Nuevo Cliente Corporativo</Button>
            <Button onClick={this._onButtonClick3} variant="primary">Actualizar Cliente</Button>
            </Stack>
            {this.state.showComponent1 ? <ClienParticular /> :null}
            {this.state.showComponent2 ? <ClienCorporativo /> :null}
            {this.state.showComponent3 ? <ActualizarCliente /> :null}

            </Container>

            <FooterGeneral/>
        </>
    )
}}

export default Clientes