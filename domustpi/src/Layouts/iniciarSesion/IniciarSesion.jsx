import React from 'react'
import { SingUp,BannerIniciarSesion,ComponenteHeader,FooterGeneral,BotonesCambiarVistas} from '../../Components'
import Container from 'react-bootstrap/Container'
const IniciarSesion = () => {
    const estado = "ClienteSI"
    return (
        <div>
            <ComponenteHeader estadoPantalla={estado}/>
            <BannerIniciarSesion />
            <SingUp className="fondo"/>
            <BotonesCambiarVistas/>
            <FooterGeneral/>
        </div>
    )
}

export default IniciarSesion