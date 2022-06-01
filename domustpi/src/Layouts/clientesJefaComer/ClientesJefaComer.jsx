import React from 'react'
import { HeaderJefaComer,ListadoClientes, FooterGeneral} from '../../Components'


const ClientesJefaComer = () =>  {
    return(
        <>
            <HeaderJefaComer/>
                <ListadoClientes/>
            <FooterGeneral/>
        </>
    )
}

export default ClientesJefaComer