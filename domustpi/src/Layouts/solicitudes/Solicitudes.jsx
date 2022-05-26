import React from 'react'
import {HeaderSecretariaDC, Solic,FooterGeneral} from '../../Components'
import './Solicitudes.css'

const Solicitudes = () => {
    return (
        <>
            <HeaderSecretariaDC/>
            <div className='spacingContainer'>
                <h2>Solicitudes</h2>
                <Solic/>
            </div>
            <FooterGeneral/>
        </>
    )
}

export default Solicitudes