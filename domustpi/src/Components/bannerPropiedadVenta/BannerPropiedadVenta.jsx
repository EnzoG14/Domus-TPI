import React from 'react';
import { FaAddressBook} from "react-icons/fa";
import {Carousel} from "react-bootstrap";


const BannerPropiedadVenta = () => {
    return (
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-3">
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
                            <button class="btn btn-outline-primary flex-shrink-0 mt-2" type="button">
                                <FaAddressBook/> Reservar cita
                            </button>
                        </div>
                        
                    </div>
                    <Carousel variant="dark" className="mt-5 mx-4">
                        <Carousel.Item>
                            <img
                            className="d-block w-75 mx-auto"
                            src="https://definicion.de/wp-content/uploads/2011/01/casa-1.jpg"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-75 mx-auto"
                            src="https://casasparaconstruir.com/projetos/140/01.jpg"
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-75 mx-auto"
                            src="https://images.adsttc.com/media/images/622b/9c0b/6a2b/af01/6506/d38b/newsletter/004-ok.jpg?1647025197'"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
  );
}

export default BannerPropiedadVenta;