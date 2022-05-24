import React from 'react'
import { HeaderSecretariaDC, Paginacion,EncabezadoLista,ComponenteLista } from '../../Components'
import './Usuarios.css'
const Usuarios = () => {
    return (
        <>
            <HeaderSecretariaDC />
            
            <div className='spacingContainer'>
                <EncabezadoLista />
            </div>
            <Paginacion />
        </>
    )
}

export default Usuarios