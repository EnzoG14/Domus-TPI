import React, {useState} from 'react'
import { HeaderJefaComer, EncabezadoReportesVentas, ComponenteReportesVentas, FooterReportesVentas, EncabezadoReportesAlquileres, 
    ComponenteReportesAlquileres, FooterReportesAlquileres, FooterGeneral, EncabezadoReportesClientes, ComponenteReportesClientes, 
    FooterReportesClientes, EncabezadoReportesProps, ComponenteReportesProps, FooterReportesProps} from '../../Components'
import {Container, Tab,Tabs} from 'react-bootstrap'

function ReportesJefaComer() {
    const [key,setKey] = useState('nReporteV')

    return(
        <>
        <HeaderJefaComer />
        <Container className="mr-50 ml-50 mt-3 mb-3">
        <Tabs
            id="controlled-tab-example "
            activeKey={key}
            onSelect={(k) => setKey(k)}
            
            >
            <Tab eventKey="nReporteV" title="Reporte de Ventas">
                    <EncabezadoReportesVentas />
                    <ComponenteReportesVentas />
                    <ComponenteReportesVentas />
                    <FooterReportesVentas />
            </Tab>
            <Tab eventKey="nReporteA" title="Reporte de Alquileres">
                    <EncabezadoReportesAlquileres />
                    <ComponenteReportesAlquileres />
                    <ComponenteReportesAlquileres />
                    <FooterReportesAlquileres />
            </Tab>
            <Tab eventKey="nReporteC" title="Reporte de Clientes">
                    <EncabezadoReportesClientes />
                    <ComponenteReportesClientes />
                    <ComponenteReportesClientes />
                    <FooterReportesClientes />
            </Tab>
            <Tab eventKey="nReporteP" title="Reporte de Propiedades">
                    <EncabezadoReportesProps />
                    <ComponenteReportesProps />
                    <ComponenteReportesProps />
                    <FooterReportesProps />
            </Tab>
        </Tabs>
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default ReportesJefaComer