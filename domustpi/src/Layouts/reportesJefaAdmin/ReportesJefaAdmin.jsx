import React from 'react'
import {FooterReporteTransacciones,ComponenteReporteTransacciones,HeaderJefaAdmin, FooterGeneral, EncabezadoReporteTransacciones} from '../../Components'
import Container from 'react-bootstrap/Container';

const ReportesJefaAdmin = () => {
    return (
        <>
            <HeaderJefaAdmin/>
            <Container className="mr-50 ml-50 mt-3 mb-3">  
                <EncabezadoReporteTransacciones/>
                <Container className="mr-50 ml-50 mt-3 mb-3">
                    <ComponenteReporteTransacciones />
                    <FooterReporteTransacciones />
                </Container>
            </Container>
            <FooterGeneral/>
        </>
    )
}

export default ReportesJefaAdmin