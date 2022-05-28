import React,{useState} from 'react'
import { HeaderSecretariaDC, Paginacion,EncabezadoLista,ComponenteLista, FooterGeneral, NuevoUsuario } from '../../Components'
import Button from 'react-bootstrap/Button'
import './Usuarios.css'
import Container from 'react-bootstrap/Container';


function Usuarios () {
    const [nuevouser, setNuevouser] = useState(false);
    function _onButtonClick() {
        if (nuevouser) {
            setNuevouser(false);
        } else {
            setNuevouser(true);
        }}
    return (
        <>
            <HeaderSecretariaDC />
            
            <div className='spacingContainer'>
                <Container>
                    <Button onClick={()=>_onButtonClick()} variant="primary">Nuevo Cliente</Button>
                    {nuevouser ? <NuevoUsuario/> :null}
                </Container>
                <EncabezadoLista />
            </div>
            <Paginacion />

            <FooterGeneral/>
        </>
    )
}

export default Usuarios