import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import './CrearReclamo.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
//Falta conectar componentes y crear el componente para ver los reclamos 
import { ComponenteHeader } from '../../Components' 
// import Reclamos from './Reclamos/Reclamos'
// import RealizarReclamo from './Reclamos/RealizarReclamo'
import Modal from 'react-bootstrap/Modal';

function CrearReclamo() {

    const [show, setShow] = useState(false);
    const handleClose = (
    ) => { setShow(false);
        navigate('/reclamos')};
    const handleShow = () => setShow(true);
    const navigate = useNavigate()

    const handleChanges = (e) => {  
        setReclamo({...reclamo, [e.target.name]: e.target.value});
        
        console.log(reclamo)
    }


    const [reclamo,setReclamo] = useState({
        tituloReclamo: '',
        descripcionReclamo: '',
        propiedadReclamo: '',
        clienteReclamo: '1',
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const info= await axios.post('http://localhost:4000/crearReclamo',{reclamo})
       /*  const res = await fetch('http://localhost:4000/crearReclamo', {
            method: 'POST',
           body: JSON.stringify(reclamo),
            headers: { 'Content-Type': 'application/json' },
            mode: 'no-cors',
        }); */
       // const d = await res.json();
        console.log(info.data);
        setShow(true);
        
    };




    const [propiedades, setPropiedades] = useState([])

    const loadPropiedades = async () => {
        const response = await fetch('http://localhost:4000/propiedades')
        const data = await response.json()
        setPropiedades(data)
    }   

    useEffect(() => {
        loadPropiedades()
    }, [])

    const links =[
        {nombre: 'Inicio', href: '/inicioAutenticado'},
        {nombre: 'Catalogo', href: '/catalogoAutenticado'},
        {nombre: 'Propiedades', href: '/AdministrarPropiedades'},
        {nombre: 'Reclamos', href: '/reclamos'},]
        const reclamos = [{titulo:'Realizar Reclamo', descripcion:'Realizar reclamo de una propiedad', href:'/realizarreclamo'},{titulo:'Seguimiento Reclamo', descripcion:'Seguimiento de reclamos', href:'/seguimientoreclamo'}]
      return(
      <div>
          <ComponenteHeader
            usuario = 'Juan Perez'
            estadoPantalla="clientes" 
            claseNav="nav-cliente"
            claseBoton="boton-clienteSI end-0"
            links={links} />

<div className='d-flex flex-row justify-content-around'
    style= {{height: '39.9rem'}}>
            <Form className='w-50 m-4'
                 onSubmit={handleSubmit}>
            <Form.Label className='tituloh1'>Realizar Reclamo</Form.Label>
            <Form.Group className="mb-3" controlId="tituloReclamo">
                <Form.Label className='tituloh2'>Titulo Reclamo</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Titulo Reclamo" 
                name="tituloReclamo" onChange={handleChanges}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="propiedadSeleccionada">
                <Form.Label className='tituloh2'>Propiedad</Form.Label>
                <Form.Select aria-label="Default select example" name="propiedadReclamo" defaultValue="prim" onChange={handleChanges}>
                    <option disabled value="prim">Seleccione una propiedad</option>
                    {propiedades.map((propiedadesCliente, ) =>(
                    <option  value={propiedadesCliente.idpropiedad}>{propiedadesCliente.direccionpropiedad}</option>
                    ) )}
                </Form.Select >
            </Form.Group>
            <Form.Group className="mb-3" controlId="descripcionReclamo">
                <Form.Label className='tituloh2'>Descripcion</Form.Label>
                <Form.Control className='areatexto' as="textarea" rows={5} placeholder="Ingrese descripcion del reclamo"
                name="descripcionReclamo" onChange={handleChanges} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Continuar
            </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Crear Reclamo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    Reclamo creado con éxito
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
            <img class="img-fluid mb-3 mb-lg-0 w=45 ImagenReclamo" src="https://imgs.search.brave.com/RiihtkONuidRDt5B_DvoqwL9E03VbZvaSKwayWAL15A/rs:fit:626:417:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mb3RvLWdyYXRp/cy9tdWplci1uZWdv/Y2lvcy10b21hbmRv/LW5vdGFzLWN1YWRl/cm5vLW5vdGFzLXBs/dW1hLW9maWNpbmFf/MzU3MDgtNTgwLmpw/Zw" alt="..." />
        </div>
      </div>
    )
}

export default CrearReclamo