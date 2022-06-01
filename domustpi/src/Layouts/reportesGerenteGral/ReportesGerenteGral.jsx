import React from 'react'
import {HeaderGerenteGral, FooterGeneral, EncabezadoReportesGerenteGral, ComponenteReportesVentas, FooterReportesVentas, EncabezadoReportesVentas} from '../../Components'
import Container from 'react-bootstrap/Container';

const ReportesGerenteGral = () => {
    return (
        <>
            <HeaderGerenteGral/>
            <Container className="mr-50 ml-50 mt-3 mb-3">  
                <EncabezadoReportesGerenteGral/>
                <Container className="mr-50 ml-50 mt-5 mb-3">
                    <EncabezadoReportesVentas />
                    <ComponenteReportesVentas />
                    <ComponenteReportesVentas />
                    <FooterReportesVentas />
                </Container>
                <Container className="mr-50 ml-50 mt-5 mb-3">
                    <EncabezadoReportesVentas />
                    <ComponenteReportesVentas />
                    <ComponenteReportesVentas />
                    <FooterReportesVentas />
                </Container>
            </Container>
            <FooterGeneral/>
        </>
    )
}

export default ReportesGerenteGral