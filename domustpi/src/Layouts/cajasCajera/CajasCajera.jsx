import React, {useState} from 'react'
import { HeaderCajera,Alquiler,Venta,Paginacion,EncabezadoTransaccion, BotonCierreCaja,FooterGeneral} from '../../Components'
import {Container, Tab, Tabs} from 'react-bootstrap'

function CajasCajera() {
    const [key,setKey] = useState('nCajaA')

    return(
        <>
        <HeaderCajera />
        <Container className="mr-50 ml-50 mt-3 mb-3">
        <Tabs
            id="controlled-tab-example "
            activeKey={key}
            onSelect={(k) => setKey(k)}
            
            >
            <Tab eventKey="nCajaA" title="Caja de Alquileres">
                <Alquiler />
            </Tab>
            <Tab eventKey="nCajaV" title="Caja de Ventas">
                <Venta />
            </Tab>
            <Tab eventKey="nCajaC" title="Cierre de Caja">
                <div>
                    <EncabezadoTransaccion />
                </div>
                <Paginacion />
                <BotonCierreCaja />
            </Tab>
        </Tabs>
        </Container>
        <FooterGeneral/>
        </>
    )
}

export default CajasCajera