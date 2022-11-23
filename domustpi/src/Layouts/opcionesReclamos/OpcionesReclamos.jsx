import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './OpcionesReclamos.css'

//Falta conectar componentes y crear el componente para ver los reclamos 
import { ComponenteHeader } from '../../Components' 
// import Reclamos from './Reclamos/Reclamos'
// import RealizarReclamo from './Reclamos/RealizarReclamo'

function OpcionesReclamos() {
    const links =[
        {nombre: 'Inicio', href: '/inicioAutenticado'},
        {nombre: 'Catalogo', href: '/catalogoAutenticado'},
        {nombre: 'Propiedades', href: '/AdministrarPropiedades'},
        {nombre: 'Reclamos', href: '/reclamos'},]
        const reclamos = [{titulo:'Realizar un reclamo', descripcion:'Realizar reclamo de una propiedad', href:'/crearReclamo'},{titulo:'Seguimiento de reclamos', descripcion:'Visualice los reclamos realizados', href:'/seguirReclamo'}]
      return(
        <div class="bg-image"  
        style= {{
        backgroundImage: 'url("https://imgs.search.brave.com/4HjeC4EHYtAwqJs2Hft8xaXZ6a5qbxBn7eVQAWAjw1s/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cGVyc3BlY3RpdmVz/bGxjLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvQm90dG9tbGVm/dHBhZ2UyLmpwZw")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
          <ComponenteHeader
            usuario = 'Juan Perez'
            estadoPantalla="clientes" 
            claseNav="nav-cliente"
            claseBoton="boton-clienteSI end-0"
            links={links} />

      <div className='reclamos d-flex flex-row justify-content-around m-2'
          style={{paddingBottom: '20rem'}}>
              {reclamos.map (reclamos =>(
              <Card style={{ width: '40rem', 
                            margin: '2rem' }}>
              <Card.Img variant="top" src=""/>
              <Card.Body>
                  <Card.Title>{reclamos.titulo}</Card.Title>
                  <Card.Text>
                  {reclamos.descripcion}
                  </Card.Text>
                  <Button href={reclamos.href} variant="primary">Continuar</Button>
              </Card.Body>
              </Card>))}
      </div>
          
      </div>
    )
}

export default OpcionesReclamos