import React from 'react';
import './BannerPerfilUsuarios.css';

function BannerPerfilUsuarios(props){

    const Usuario = props.Usuario

    return(
        <section>
        <header class="bg-white py-0">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <img src="https://i.pinimg.com/originals/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="" width="250" height="250" className="FotoPerfil"/>
                            <h1 class="display-5 fw-bolder text-black mb-3 mt-3" id="Perfil2">{Usuario}</h1>
                            <br />
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center pb-5">
                                <a class="btn btn-outline-dark btn-lg px-4" href="/" id="CerrarSesion">Cerrar sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</section>   
);}


export default BannerPerfilUsuarios

