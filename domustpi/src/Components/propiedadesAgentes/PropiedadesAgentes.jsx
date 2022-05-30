import React,{useState} from 'react';
import {InfoPropietario} from '../../Components'
import './PropiedadesAgentes.css';
import {Button} from 'react-bootstrap';




function PropiedadesAgentes  ()  {

    const [boton , setBoton] = useState(false);
    function Show() {
        if (boton) {
            setBoton(false);
        } else {
            setBoton(true);
        }
    }

    return (
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6">
                        <img class="card-img-top mb-5 mb-md-0" src="https://imgar.zonapropcdn.com/avisos/1/00/21/49/15/47/720x532/1712830935.jpg" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="small mb-1">ID-Propiedad: NCF-420</div>
                        <h1 class="display-5 fw-bolder">Departamento Chascomus</h1>
                        <div class="fs-5 mb-3">
                            <span>French 69 - Resistencia, Chaco - Argentina</span>
                        </div>
                        {/* <p class="lead">Moderno apartamento a estrenar a pasos de Punta Shopping y 700 metros del mar. Cuenta con living-comedor con cocina integrada, dos dormitorios, uno en suite y dos baños completos, terraza y garaje. Edificio con muy buenos servicios. Precio mas gastos de ocupación.</p> */}
                        <p>Tipo: Departamento</p>
                        <p>Espacios: 1 baño - 2 dormitorios</p>
                        <p>Artefactos: Cocina y aires acondicionados</p>
                        <p>Antiguedad: 2 años</p>
                        <p>Tipo: Departamento</p>
                        <p>Opciones de contrato: Alquiler</p>
                        <p>Propietario: Troffeli Inmobiliaria</p>
                        <p>Mail de contacto: contacto@troffeli.com</p>
                        <Button onClick={Show} className="btn-customize" variant="primary" >
                            Informacion Propietario
                        </Button>
                        {boton ? <InfoPropietario/>:null}
                    </div>
                </div>
            </div>
        </section>
  );
}

export default PropiedadesAgentes;