import React from 'react'
import { HeaderCajera, Paginacion, EncabezadoTransaccion, FooterGeneral} from '../../Components'
import Container from 'react-bootstrap/Container'

const TransaccionesCajera = () => {
    return (
        <>
        <HeaderCajera />
        <Container>
        <EncabezadoTransaccion />
        <Paginacion />
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default TransaccionesCajera