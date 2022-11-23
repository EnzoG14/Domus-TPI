import React from 'react'
import { ComponenteHeader,ComponenteInicio, FooterGeneral } from '../../Components'
const InicioAutenticado = () => {
    const links =[
        {nombre: 'Inicio', href: '/inicioAutenticado'},
        {nombre: 'Catalogo', href: '/catalogoAutenticado'},
        {nombre: 'Propiedades', href: '/AdministrarPropiedades'},
        {nombre: 'Reclamos', href: '/reclamos'},]
    return (
        <>
            <ComponenteHeader
            usuario = 'Juan Perez'
            estadoPantalla="clientes" 
            claseNav="nav-cliente"
            claseBoton="boton-clienteSI end-0"
            links={links} />
            <ComponenteInicio />
            <FooterGeneral/>
        </>
    )
}

export default InicioAutenticado