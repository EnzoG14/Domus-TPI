import React from 'react'
import { HeaderSecretariaDC, Alquiler, Venta, Paginacion, EncabezadoTransaccion, ComponenteTransaccion, EncabezadoEyS, ComponenteEyS, BotonCierreCaja, RangoFecha} from '../../Components'
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
            <RangoFecha />
            <div>
                <EncabezadoTransaccion />
            </div>
        </Container>
        </>
    )
}

export default Transacciones