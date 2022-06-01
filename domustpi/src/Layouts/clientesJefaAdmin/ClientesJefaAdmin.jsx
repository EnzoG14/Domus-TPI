import React from 'react'
import { HeaderJefaAdmin,ListadoClientes, FooterGeneral} from '../../Components'


const ClientesJefaAdmin = () =>  {
    return(
        <>
            <HeaderJefaAdmin/>
                <ListadoClientes/>
            <FooterGeneral/>
        </>
    )
}

export default ClientesJefaAdmin