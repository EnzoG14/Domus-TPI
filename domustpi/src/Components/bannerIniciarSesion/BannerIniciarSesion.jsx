import React from 'react';
import './BannerIniciarSesion.css';
import {Nav} from 'react-bootstrap';


const BannerIniciarSesion = () => {
    return (
 
<Nav>
<img src={require('./src/DomusLogo.png')} alt='inicioLogo' class='inicioLogo'/>
<hr className="separadorHeader"/>
</Nav>

    )}

export default BannerIniciarSesion;