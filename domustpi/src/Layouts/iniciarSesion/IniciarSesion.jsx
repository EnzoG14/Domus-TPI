import React from 'react'
import { SingUp,Header,HeaderIniciarSesion} from '../../Components'
import Container from 'react-bootstrap/Container'
const IniciarSesion = () => {
    return (
        <div>
            <Header />
            <HeaderIniciarSesion />
            <SingUp className="fondo"/>
        </div>
    )
}

export default IniciarSesion