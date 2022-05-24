import React from 'react';



const BannerPerfil = () => {
    return (
    <header class="bg-dark py-0">
    <div class="container px-5">
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-6">
                <div class="text-center my-5">
                    <img src="https://pbs.twimg.com/profile_images/1075430636847067137/ko6UJaMN_400x400.jpg" alt="" width="250" height="250"/>
                    <h1 class="display-5 fw-bolder text-white mb-2">Bienvenido Juan Perez</h1>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                        <a class="btn btn-outline-light btn-lg px-4" href="singin.html">Cerrar sesión</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </header>
  );
}

export default BannerPerfil;

