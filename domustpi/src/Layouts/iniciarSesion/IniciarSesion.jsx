import React from 'react'
import { SingUp,Header,HeaderIniciarSesion,FooterGeneral} from '../../Components'
import Container from 'react-bootstrap/Container'
const IniciarSesion = () => {
    return (
        <div>
            <Header />
            <HeaderIniciarSesion />
            <SingUp className="fondo"/>
            <FooterGeneral/>
        </div>
    )
}

export default IniciarSesion