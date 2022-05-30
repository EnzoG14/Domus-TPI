import React from 'react';
import './BannerPerfil.css';
import { BsArrowRight,BsCollection,BsBuilding } from "react-icons/bs";

const BannerPerfil = () => {
    return (
    <section>
        <header class="bg-dark py-0">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <img src="https://itmastersseries.com/wp-content/uploads/2020/09/juan.jpg" alt="" width="250" height="250" className="FotoPerfil"/>
                            <h1 class="display-5 fw-bolder text-white mb-2" id="Perfil2">Bienvenido Juan Perez</h1>
                            <br />
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                                <a class="btn btn-outline-light btn-lg px-4" href="/" id="CerrarSesion">Cerrar sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="py-3 border-bottom" id="features">
            <div class="container px-5 my-5">
                <div class="row gx-5">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsCollection/></div>
                        <h2 class="h4 fw-bolder">Datos personales</h2>
                        <br />
                        <p><b>Apellido/s:</b> Perez</p>
                        <p><b>Nombre/s:</b> Juan</p>
                        <p><b>Correo electrónico:</b> juan_perez@gmail.com</p>
                        <p><b>Teléfono:</b> +569 12345678</p>
                        <p><b>Dirección:</b> Av. Los Pinos, Casa N° 123</p>
                        <a class="text-decoration-none" href="#!">
                            Modificar datos
                            <BsArrowRight/>
                        </a>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsBuilding/></div>
                        <h2 class="h4 fw-bolder">Propiedades adquiridas</h2>
                        <br />
                        <p><b>Propiedad: COD-456</b> French 1531</p>
                        <p><b>Propiedad: COD-582</b> Sarmiento 2142</p>
                        <p><b>Propiedad: COD-422</b> Paraguay 734</p>
                        <a class="text-decoration-none" href="/administrarPropiedades">
                            Administrar propiedades
                            <BsArrowRight/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </section>
  );
}

export default BannerPerfil;

