import React,{useState} from 'react'
import { HeaderAdminSitio, Paginacion,EncabezadoLista, FooterGeneral, NuevoUsuario } from '../../Components'
import Button from 'react-bootstrap/Button'
import './UsuariosAdminSitio.css'
import Container from 'react-bootstrap/Container';


function UsuariosAdminSitio () {
    const [nuevouser, setNuevouser] = useState(false);
    function _onButtonClick() {
        if (nuevouser) {
            setNuevouser(false);
        } else {
            setNuevouser(true);
        }}
    return (
        <>
            <HeaderAdminSitio />
            
            <div className='spacingContainer'>
                <Container>
                    <Button className="btn-customize mb-3" onClick={()=>_onButtonClick()} variant="primary">Nuevo Usuario</Button>
                    {nuevouser ? <NuevoUsuario/> :null}
                </Container>
                <EncabezadoLista mostrar="no" />
            </div>
            <Paginacion />

            <FooterGeneral/>
        </>
    )
}

export default UsuariosAdminSitio