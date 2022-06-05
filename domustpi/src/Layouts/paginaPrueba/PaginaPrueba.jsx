import React from 'react';
import {ComponenteHeader} from '../../Components'

const paginaPrueba = () => {
    const links =[
        {nombre: 'Inicio', href: '/'},
        {nombre: 'Catalogo', href: '/catalogo'},
        {nombre: 'Quienes somos', href: '/quienessomos'},
    ] 
    return (
        <div>
            <ComponenteHeader 
            estadoPantalla="cliente" 
            claseNav="nav-cliente"
            claseBoton="boton-clienteSI end-0"
            links={links}
             />
        </div>
    );
}

export default paginaPrueba