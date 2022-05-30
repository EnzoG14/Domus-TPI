import React from 'react';
import './BannerPerfilUsuarios.css';

function BannerPerfilUsuarios(props){

    const Usuario = props.Usuario

    return(
        <section>
        <header class="bg-dark py-0">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <img src="https://i.pinimg.com/originals/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg" alt="" width="250" height="250" className="FotoPerfil"/>
                            <h1 class="display-5 fw-bolder text-white mb-2" id="Perfil2">Bienvenido {Usuario}</h1>
                            <br />
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a class="btn btn-outline-light btn-lg px-4" href="/" id="CerrarSesion">Cerrar sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</section>   
);}


export default BannerPerfilUsuarios

