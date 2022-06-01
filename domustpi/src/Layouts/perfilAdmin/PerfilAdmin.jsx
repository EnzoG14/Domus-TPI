import React from 'react'
import { HeaderAdminSitio,BannerPerfilUsuarios ,FooterGeneral} from '../../Components'
const PerfilAdmin = () => {
    return (
        <>
            <HeaderAdminSitio />
            <BannerPerfilUsuarios Usuario="Bienvenido Administrador" />
            <FooterGeneral />
        </>
    )
}

export default PerfilAdmin