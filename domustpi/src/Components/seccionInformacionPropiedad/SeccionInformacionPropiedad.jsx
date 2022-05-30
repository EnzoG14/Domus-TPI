import React from 'react';


const SeccionInformacionPropiedad = () => {
    return (
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src="https://www.casasaguilar.com.mx/images/tsgs/venta-departamentos-oaxaca/departamento-en-venta-huatulco.jpg" alt="..." /></div>
                    <div class="col-md-6">
                        <div class="small mb-1">ID-Propiedad: NCF-420</div>
                        <h1 class="display-5 fw-bolder">Place Layaette, 2 dormitorios</h1>
                        <div class="fs-5 mb-1">
                            <span class="text-decoration-line-through">USD $45.000</span>
                            <span>USD $40.000</span>
                        </div>
                        <p class="lead">Moderno apartamento a estrenar a pasos de Punta Shopping y 700 metros del mar. Cuenta con living-comedor con cocina integrada, dos dormitorios, uno en suite y dos baños completos, terraza y garaje. Edificio con muy buenos servicios. Precio mas gastos de ocupación.</p>
                        <div class="d-flex">
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                Cambiar Informacion
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default SeccionInformacionPropiedad;