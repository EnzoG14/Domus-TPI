import React from 'react'
import {ComponenteHeader,SeccionPropiedadAdmin,FooterGeneral} from '../../Components'

const AdministrarPropiedades = () => {
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
            <SeccionPropiedadAdmin/>
            <SeccionPropiedadAdmin/>
            <SeccionPropiedadAdmin/>
            <FooterGeneral/>
        </>
    )
}

export default AdministrarPropiedades