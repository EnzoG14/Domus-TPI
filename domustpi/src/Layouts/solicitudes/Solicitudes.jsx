import React from 'react'
import {HeaderSecretariaDC, Solic} from '../../Components'
import './Solicitudes.css'

const Solicitudes = () => {
    return (
        <>
            <HeaderSecretariaDC/>
            <div className='spacingContainer'>
                <h2>Solicitudes</h2>
                <Solic/>
            </div>
        </>
    )
}

export default Solicitudes