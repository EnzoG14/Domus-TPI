import React from 'react'
import { HeaderCajera,BannerPerfilUsuarios ,FooterGeneral} from '../../Components'
const PerfilCajera = () => {
    return (
        <>
            <HeaderCajera />
            <BannerPerfilUsuarios Usuario="Bienvenida Cajera" />
            <FooterGeneral />
        </>
    )
}

export default PerfilCajera