import React from 'react'
import {Card} from 'react-bootstrap'
import {useEffect, useState} from 'react'

//Falta conectar componentes y crear el componente para ver los reclamos 
import { ComponenteHeader } from '../../Components' 
// import Reclamos from './Reclamos/Reclamos'
// import RealizarReclamo from './Reclamos/RealizarReclamo'


function SeguirReclamo() {

    const [reclamos, setReclamos] = useState([])

    const loadReclamos = async () => {
        const response = await fetch('http://localhost:4000/reclamos/1')
        const data = await response.json()
        setReclamos(data)
    }   

    useEffect(() => {
        loadReclamos()
    }, [])

    const links =[
        {nombre: 'Inicio', href: '/inicioAutenticado'},
        {nombre: 'Catalogo', href: '/catalogoAutenticado'},
        {nombre: 'Propiedades', href: '/AdministrarPropiedades'},
        {nombre: 'Reclamos', href: '/reclamos'},]
      return(
      <div class="bg-image"  
        style= {{
        backgroundImage: 'url("https://imgs.search.brave.com/2iNdMH1mjFW-RU8KjmyLbOkaJTargiiFJJiyDySM5HY/rs:fit:626:417:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mb3RvLWdyYXRp/cy9zZWNyZXRhcmlh/LW11amVyLXRvbWFu/ZG8tbm90YXMtc3Ut/amVmZS1yZXVuaW9u/LW5lZ29jaW9zXzM4/MzM1LTI1MC5qcGc")',
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

            <div style= {{
                margin: '2rem',
                paddingBottom: '40rem'
            }}>
            <h1>Reclamos realizados</h1>
                <div> 
                {reclamos.length !== 0 ? reclamos.map(reclamo =>
                        <Card style={{ 
                            marginBottom: '.7rem',
                        }}>
                            <Card.Body>
                                <Card.Title><h4>{reclamo.tituloreclamo}</h4></Card.Title>
                                <Card.Text><strong>Descripción:</strong> {reclamo.descripcionreclamo}</Card.Text>
                                <Card.Text><strong>Fecha de realización del reclamo:</strong> {(reclamo.fechareclamo).substring(0, 10)}</Card.Text>
                                <Card.Text><strong>Estado del reclamo:</strong> {reclamo.estadoreclamo}</Card.Text>
                                <Card.Text><strong>Propiedad sobre la cual se realizó el reclamo:</strong> {reclamo.direccionpropiedad}</Card.Text>
                            </Card.Body>
                        </Card>
                    )
                : <h2>No hay reclamos</h2>}
                </div>
            </div>
      </div>
    )
}

export default SeguirReclamo