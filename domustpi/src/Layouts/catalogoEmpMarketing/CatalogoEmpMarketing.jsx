import React from 'react'
import {HeaderEmpleadoMarketing,PropMod, FooterGeneral,BotonNuevaPropiedad} from '../../Components';
// import HeaderCatalogo from './Components/HeaderCatalogo.jsx';
// import Propiedad from './Components/Propiedad.jsx';


function CatalogoEmpMarketing() {

  const propMods=[{direccion:'French 401',
                      precio:'$1,000,000',
                      descripcion:'lorem ipsun',
                    imagen:'https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg'}, 
                    {direccion:'Pellegrini 635',
                      precio:'$500,000',
                      descripcion:'lorem ipsun',
                    imagen:'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560'},
                    {direccion:'Viraro 170'
                      ,precio:'$700,000',
                      descripcion:'lorem ipsun',
                    imagen:'https://www.bbva.com/wp-content/uploads/2021/04/casas-ecolo%CC%81gicas_apertura-hogar-sostenibilidad-certificado--1024x629.jpg'},
                    {direccion:'Av. Sarmiento 635',
                      precio:'$800,000',
                      descripcion:'lorem ipsun',
                    imagen:'https://casasparaconstruir.com/projetos/140/01.jpg'},
                    {direccion:'Jujuy 514',
                      precio:'$900,000',
                      descripcion:'lorem ipsun',
                    imagen:'https://images.adsttc.com/media/images/5f90/e509/63c0/1779/0100/010e/newsletter/3.jpg?1603331288'},
                    {direccion:'Las Heras 741',
                      precio:'$1,000,000',
                      descripcion:'lorem ipsun',
                    imagen:'https://www.carza.com/blog/wp-content/uploads/2018/08/so%C3%B1ar-con-casa1.jpg'},
                    {direccion:'José Hernandes 963',
                      precio:'$1,100,000',
                      descripcion:'lorem ipsun',
                    imagen:'http://planosdecasasmodernas.com/wp-content/uploads/2018/03/Plano-de-casa-de-7x12-metros-en-una-planta.jpg'},
                    {direccion:'Hernandarias 526',
                      precio:'$1,200,000',
                      descripcion:'lorem ipsun',
                    imagen:'https://images.adsttc.com/media/images/622b/9c0b/6a2b/af01/6506/d38b/newsletter/004-ok.jpg?1647025197'}]
  
    return (
    <div>
      <HeaderEmpleadoMarketing/>
      <div className="mx-auto col-12 p-5 row gap-4 justify-content-center">
        {propMods.map(propMod=>(
                  
                  <PropMod direccion={propMod.direccion} precio={propMod.precio} descripcion={propMod.descripcion} imagen={propMod.imagen}/>

                ))}
      </div>
      <FooterGeneral/>
    </div>
    );
}

export default CatalogoEmpMarketing