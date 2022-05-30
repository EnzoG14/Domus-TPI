import React,{useState} from 'react';
import {InfoPropietario} from '../../Components'
import './EditarPropiedadesMarketing.css';
import {Button} from 'react-bootstrap';




function EditarPropiedadesMarketing  ()  {

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
                        <img class="card-img-top mb-5 mb-md-0 imagenPropiedad" src="https://imgar.zonapropcdn.com/avisos/1/00/21/49/15/47/720x532/1712830935.jpg" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="small mb-1">ID-Propiedad: NCF-420</div>
                        <h1 class="display-5 fw-bolder">Departamento Las Margaritas</h1>
                        <div class="fs-5 mb-3">
                            <span>French 69 - Resistencia, Chaco - Argentina</span>
                        </div>
                        {/* <p class="lead">Moderno apartamento a estrenar a pasos de Punta Shopping y 700 metros del mar. Cuenta con living-comedor con cocina integrada, dos dormitorios, uno en suite y dos baños completos, terraza y garaje. Edificio con muy buenos servicios. Precio mas gastos de ocupación.</p> */}
                        <p>Tipo: Departamento</p>
                        <p>Espacios: 1 baño - 2 dormitorios</p>
                        <p>Artefactos: Cocina y aires acondicionados</p>
                        <p>Antiguedad: 2 años</p>
                        <p>Opciones de contrato: Alquiler</p>
                    </div>
                    <Button onClick={Show} className="btn-customize mt-3 mx-4" variant="primary" >
                            Informacion Propietario
                        </Button>
                        {boton ? <InfoPropietario/>:null}
                    {/* boton de dos opciones desplegable */}
                    {/* <Button onClick={()=>_onButtonClick()} variant="primary">Editar galeria</Button>
                            {actpresen ? <ActualizarPresentacion /> :null} */}
                </div>
            </div>
        </section>
  );
}

export default EditarPropiedadesMarketing;