import React from 'react'
import { ComponenteHeader,ComponenteInicio, FooterGeneral } from '../../Components'
const Inicio = () => {
    const links =[
        {nombre: 'Inicio', href: '/'},
        {nombre: 'Catalogo', href: '/catalogo'},
        {nombre: 'Quienes somos', href: '/quienessomos'},
    ]
    return (
        <>
            <ComponenteHeader 
            estadoPantalla="cliente" 
            claseNav="nav-cliente"
            claseBoton="boton-clienteSI end-0"
            links={links}
             />
            <ComponenteInicio />
            <FooterGeneral/>
        </>
    )
}

export default Inicio