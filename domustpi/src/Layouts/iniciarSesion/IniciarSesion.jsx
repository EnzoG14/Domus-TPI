import React from 'react'
import { SingUp,BannerIniciarSesion,ComponenteHeader,FooterGeneral,BotonesCambiarVistas} from '../../Components'

const IniciarSesion = () => {
    const links =[
        {nombre: 'Inicio', href: '/'},
        {nombre: 'Catalogo', href: '/catalogo'},
        {nombre: 'Quienes somos', href: '/quienessomos'},]
    return (
        <div>
            <ComponenteHeader estadoPantalla="cliente" 
            claseNav="nav-cliente"
            claseBoton="boton-clienteSI end-0"
            links={links}/>
            <BannerIniciarSesion />
            <SingUp className="fondo"/>
            {/* <BotonesCambiarVistas/> */}
            <FooterGeneral/>
        </div>
    )
}

export default IniciarSesion