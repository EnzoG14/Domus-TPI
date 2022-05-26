import React from 'react'
import { HeaderSecretariaDC, Paginacion,EncabezadoLista,ComponenteLista, FooterGeneral } from '../../Components'
import './Usuarios.css'
const Usuarios = () => {
    return (
        <>
            <HeaderSecretariaDC />
            
            <div className='spacingContainer'>
                <EncabezadoLista />
            </div>
            <Paginacion />

            <FooterGeneral/>
        </>
    )
}

export default Usuarios