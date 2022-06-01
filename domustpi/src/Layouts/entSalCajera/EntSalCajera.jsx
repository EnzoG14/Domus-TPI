import React from 'react'
import { HeaderCajera, Alquiler, Venta, Paginacion, EncabezadoTransaccion, ComponenteTransaccion, EncabezadoEyS, ComponenteEyS, BotonCierreCaja, RangoFecha, FooterGeneral} from '../../Components'
import Container from 'react-bootstrap/Container'

const EntSalCajera = () => {
    return (
        <>
            <HeaderCajera />
        <Container className="mb-3">
            <Container className="mr-50 ml-50 mt-3 mb-3"><h1>Entrada/Salidas</h1></Container>
            <div>
                <EncabezadoEyS />
            </div>
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default EntSalCajera