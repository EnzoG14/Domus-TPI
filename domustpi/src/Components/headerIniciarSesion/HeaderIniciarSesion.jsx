import React from 'react';
import './HeaderIniciarSesion.css';
import {Nav} from 'react-bootstrap';


const HeaderIniciarSesion = () => {
    return (
 
<Nav>
<img src={require('./src/DomusLogo.png')} alt='inicioLogo' class='inicioLogo'/>
<hr className="separadorHeader"/>
</Nav>

    )}

export default HeaderIniciarSesion;