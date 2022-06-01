import React from 'react';
import './ComponenteQuienesSomos.css';

const ComponenteQuienesSomos = () => {
    return (
        <section>
            <header class="masthead">
                <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div class="d-flex justify-content-center">
                        <div class="text-center">
                            <h1 class="mx-auto my-1 text-uppercase">Domus</h1>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5">Encontrá tu lugar</h2>
                            <a class="btn btn-primary" href="#projects">Más sobre nosotros</a>
                        </div>
                    </div>
                </div>
            </header>
            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="https://redautonomos.es/images/redautonomos/como-montar-inmobiliaria.jpg" alt="..." /></div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Inicios de la compañía</h4>
                                <p class="text-black-50 mb-0">Domus arrancó como un proyecto ambicioso en 1998. Tras varios años de arduo esfuerzo y trabajo en equipo podemos afirmar que somos la mejor opción para ayudarlo a usted a encontrar SU lugar.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src="https://i0.wp.com/moovemag.com/wp-content/uploads/2020/12/inversion-inmobiliaria.jpg?fit=700%2C459&ssl=1" alt="..." /></div>
                        <div class="col-lg-6">
                            <div class="text-center h-100 project" id="azulcito">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left" id="azulcito">
                                        <h4 class="text-white">MÁS DE 5 AÑOS DE EXPERIENCIA</h4>
                                        <p class="mb-0 text-white-50">Nuestro equipo se enfoca en entender las necesidades de cada interesado, para poder seleccionar los mejores inmuebles para cada cliente, optimizando tiempos y haciendo que el proceso sea a medida y satisfactorio, encontrando siempre la mejor solución, acompañando en toda etapa, desde la primera búsqueda hasta los servicios de post-venta y apoyandonos en el asesoramiento de excelentes profesionales.</p>
                                        <hr class="d-none d-lg-block mb-0 ms-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src="https://inmobiliariachinchina.com/wp-content/uploads/2021/03/que-es-una-inversion-inmobiliaria.jpg" alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="text-center h-100 project" id="azulcito">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right" id="azulcito">
                                        <h4 class="text-white">RELACIÓN CLIENTE-DOMUS</h4>
                                        <p class="mb-0 text-white-50">Ofrecemos un portal moderno, intuitivo y sencillo de operar, con excelente calidad de imagenes y videos, para que su propiedad sea la protagonista y luzca todo su potencial. Integración en los mejores portales inmobiliarios del mercado, con una politica de marketing enfocada en llegar a un publico especifico, propiedad por propiedad. En conjunto con la calidez de nuestros asesores y su actitud enfocada en encontrar soluciones, esto hace que Domus sea un referente al momento de decidir en que empresa confiar la comercialización de su propiedad.</p>
                                        <hr class="d-none d-lg-block mb-0 me-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-section">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5">
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-100">
                                <div class="card-body text-center">
                                    <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 class="text-uppercase m-0">Dirección</h4>
                                    <hr class="my-4 mx-auto" />
                                    <div class="small text-black-50">French 401 - Resistencia, Chaco</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-100">
                                <div class="card-body text-center">
                                    <i class="fas fa-envelope text-primary mb-2"></i>
                                    <h4 class="text-uppercase m-0">Email</h4>
                                    <hr class="my-4 mx-auto" />
                                    <div class="small text-black-50"><a href="#!">inmboliariaDomus2022@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-100">
                                <div class="card-body text-center">
                                    <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 class="text-uppercase m-0">Teléfono</h4>
                                    <hr class="my-4 mx-auto" />
                                    <div class="small text-black-50">+54 3794-933651 -</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
  );
}

export default ComponenteQuienesSomos;