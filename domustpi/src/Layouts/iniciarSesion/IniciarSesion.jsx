import React from 'react'
import { SingUp,Header,HeaderIniciarSesion,FooterGeneral,BotonesCambiarVistas} from '../../Components'
import Container from 'react-bootstrap/Container'
const IniciarSesion = () => {
    return (
        <div>
            <Header />
            <HeaderIniciarSesion />
            <SingUp className="fondo"/>
            <BotonesCambiarVistas/>
            <FooterGeneral/>
        </div>
    )
}

export default IniciarSesion