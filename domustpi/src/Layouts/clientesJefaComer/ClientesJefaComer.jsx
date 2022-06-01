import React,{useState} from 'react'
import { HeaderJefaComer,ListadoClientes, FooterGeneral,Paginacion} from '../../Components'
import {Tab,Tabs,Container} from 'react-bootstrap'

function ClientesJefaComer(){
    const[key,setKey] = useState('cActuales')
    return(
        <>
            <HeaderJefaComer/>
            <Container className="mr-50 ml-50 mt-3 mb-3">
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="myClass"
                >
                <Tab eventKey="cActuales" title="Clientes Actuales" className="colorLink">
                <ListadoClientes/>
                <Paginacion/>
                </Tab>
                <Tab eventKey="cAntiguos" title="Clientes Antiguos">
                <ListadoClientes/>
                <Paginacion/>
                </Tab>
                <Tab eventKey="cTodos" title="Archivo Cliente">
                <ListadoClientes/>
                <Paginacion/>
                </Tab>      
            </Tabs>
            </Container>
            <FooterGeneral/>
        </>
    )
}

export default ClientesJefaComer