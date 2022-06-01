import React from 'react'
import { HeaderJefaAdmin, Paginacion, EncabezadoTransaccion, FooterGeneral} from '../../Components'
import Container from 'react-bootstrap/Container'

const TransaccionesCajera = () => {
    return (
        <>
        <HeaderJefaAdmin />
        <Container>
        <EncabezadoTransaccion />
        <Paginacion />
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default TransaccionesCajera