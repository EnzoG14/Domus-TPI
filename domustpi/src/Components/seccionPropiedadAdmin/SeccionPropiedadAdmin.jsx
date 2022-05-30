import React,{useState} from 'react';
import Button from 'react-bootstrap/Button'
import {ActualizarPresentacion, ClienParticular} from '../../Components'




function SeccionPropiedadAdmin  (){
    const [actpresen, setActpresen] = useState(false);
    function _onButtonClick() {
    if (actpresen) {
        setActpresen(false);
    } else {
        setActpresen(true);
    }}

    return (
        <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6">
                        <img class="card-img-top mb-5 mb-md-0" src="https://imgar.zonapropcdn.com/avisos/1/00/21/49/15/47/720x532/1712830935.jpg" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="small mb-1">ID-Propiedad: NCF-420</div>
                        <h1 class="display-5 fw-bolder">Hermoso Departamento Chascomus</h1>
                        <div class="fs-5 mb-3">
                            <span>French 69</span>
                        </div>
                        <p class="lead">Moderno apartamento a estrenar a pasos de Punta Shopping y 700 metros del mar. Cuenta con living-comedor con cocina integrada, dos dormitorios, uno en suite y dos baños completos, terraza y garaje. Edificio con muy buenos servicios. Precio mas gastos de ocupación.</p>
                        {/* <div class="d-flex">
                            <button onClick={()=>_onButtonClick()} class="btn btn-outline-dark flex-shrink-0" type="button">
                                Editar galeria
                            </button>
                            <Button onClick={()=>_onButtonClick()} variant="primary">Editar galeria</Button>
                            {actpresen ? <actualizarPresentacion/> :null}
                        </div> */}
                        <Button onClick={()=>_onButtonClick()} variant="primary">Editar galeria</Button>
                            {actpresen ? <ActualizarPresentacion /> :null}
                    </div>
                </div>
            </div>
        </section>
  );
}

export default SeccionPropiedadAdmin;
