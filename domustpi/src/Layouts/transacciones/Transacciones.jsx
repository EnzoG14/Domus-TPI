import React from 'react'
import { HeaderSecretariaDC, Alquiler, Venta, Paginacion, EncabezadoTransaccion, EncabezadoEyS, BotonCierreCaja, FooterGeneral} from '../../Components'
import Container from 'react-bootstrap/Container'

const Transacciones = () => {
    return (
        <>
            <HeaderSecretariaDC />
        <Container>
            <h2>Caja de Alquileres</h2>
            <Alquiler />
            <h2>Caja de Ventas</h2>
            <Venta />
            <h2>Entrada/Salidas</h2>
            <div>
                <EncabezadoEyS />
            </div>
            <Paginacion />
            <h2>Cierre de Caja</h2>
            <div>
                <EncabezadoTransaccion />
            </div>
            <Paginacion />
            <BotonCierreCaja />
            <h2>Transacciones</h2> 
            <div>
                <EncabezadoTransaccion />
            </div>
            <Paginacion />
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default Transacciones