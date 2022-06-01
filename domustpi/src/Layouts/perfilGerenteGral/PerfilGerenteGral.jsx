import React from 'react'
import { HeaderGerenteGral,BannerPerfilUsuarios ,FooterGeneral} from '../../Components'
const PerfilGerenteGral = () => {
    return (
        <>
            <HeaderGerenteGral />
            <BannerPerfilUsuarios Usuario="Bienvenido Gerente General" />
            <FooterGeneral />
        </>
    )
}

export default PerfilGerenteGral