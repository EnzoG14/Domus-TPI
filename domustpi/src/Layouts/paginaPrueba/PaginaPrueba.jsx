import React from 'react';
import {ComponenteHeader,BannerInicio} from '../../Components'
import './PaginaPrueba.css';

const paginaPrueba = () => {
    const links =[
        {nombre: 'Inicio', href: '/'},
        {nombre: 'Catalogo', href: '/catalogo'},
        {nombre: 'Quienes somos', href: '/quienessomos'},
    ] 
    return (
        <div className="fondo">
            <ComponenteHeader 
            estadoPantalla="cliente" 
            claseNav="nav-cliente"
            claseBoton="boton-clienteSI end-0"
            links={links}
             />
            <BannerInicio/>
        </div>
    );
}

export default paginaPrueba