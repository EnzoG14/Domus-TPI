import React from 'react'
import { HeaderCajera,Alquiler,Venta,Paginacion,EncabezadoTransaccion, BotonCierreCaja,FooterGeneral} from '../../Components'
import Container from 'react-bootstrap/Container'

const CajasCajera = () => {
    return (
        <>
            <HeaderCajera />
        <Container>
            <h2>Caja de Alquileres</h2>
            <Alquiler />
            <h2>Caja de Ventas</h2>
            <Venta />
            <h2>Cierre de Caja</h2>
            <div>
                <EncabezadoTransaccion />
            </div>
            <Paginacion />
            <BotonCierreCaja />
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default CajasCajera