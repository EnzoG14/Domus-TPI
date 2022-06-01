import React,{useState} from "react";
import {Button,Container} from 'react-bootstrap';
import {NuevaPropiedad} from '../../Components';
import "./BotonNuevaPropiedad.css"
// import HeaderCatalogo from './Components/HeaderCatalogo.jsx';
// import Propiedad from './Components/Propiedad.jsx';


function BotonNuevaPropiedad() {
    const [boton , setBoton] = useState(false);
    function Show() {
        if (boton) {
            setBoton(false);
        } else {
            setBoton(true);
        }
    }

    return (
    <Container className="barraNuevaPropiedad">
            <Button onClick={Show} className="btn-customize btnNuevaPropiedad" variant="primary" size="lg" >
            Nueva Propiedad
            </Button>
            {boton ? <NuevaPropiedad className="my-3"/>:null}
    </Container>
    );

}

export default BotonNuevaPropiedad;
