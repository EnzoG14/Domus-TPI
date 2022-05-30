import React from 'react'
import { HeaderCajera, Alquiler, Venta, Paginacion, EncabezadoTransaccion, ComponenteTransaccion, EncabezadoEyS, ComponenteEyS, BotonCierreCaja, RangoFecha, FooterGeneral} from '../../Components'
import Container from 'react-bootstrap/Container'

const EntSalCajera = () => {
    return (
        <>
            <HeaderCajera />
        <Container>
            <h2>Entrada/Salidas</h2>
            <div>
                <EncabezadoEyS />
            </div>
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default EntSalCajera