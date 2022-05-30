import React from 'react'
import { HeaderCajera, Paginacion, EncabezadoTransaccion, ComponenteTransaccion, RangoFecha, FooterGeneral} from '../../Components'
import Container from 'react-bootstrap/Container'

const TransaccionesCajera = () => {
    return (
        <>
            <HeaderCajera />
        <Container>
            <h2>Transacciones</h2> 
            <RangoFecha />
            <div>
                <EncabezadoTransaccion />
            </div>
            <Paginacion />
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default TransaccionesCajera