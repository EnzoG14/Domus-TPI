import React from 'react'
import { HeaderJefaAdmin,BannerPerfilUsuarios ,FooterGeneral} from '../../Components'
const PerfilJefaAdmin = () => {
    return (
        <>
            <HeaderJefaAdmin />
            <BannerPerfilUsuarios Usuario="Bienvenida Jefa de Administracion" />
            <FooterGeneral />
        </>
    )
}

export default PerfilJefaAdmin