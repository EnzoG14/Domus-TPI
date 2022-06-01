import React from 'react';
import Button from 'react-bootstrap/Button';


const BotonesCambiarVistas = () => {
    return (
        <div className="d-grid gap-2 btn-caja">
            <Button className="btn-customize" variant="primary" size="lg" href="/calendarioAgenteInmobiliario">
            Agente Inmobiliario
            </Button>
            <Button variant="secondary" size="lg" href="/catalogoEmpMarketing">
            Empleado Marketing
            </Button>
            <Button variant="secondary" size="lg" href="/transaccionesCajera">
            Cajera
            </Button>
            <Button variant="secondary" size="lg" href="/clientesJefaAdmin">
            Jefa de Administración
            </Button>
            <Button variant="secondary" size="lg" href="/reportesJefaComer">
            Jefa de Comercialización
            </Button>
            <Button variant="secondary" size="lg">
            Imprimir balance
            </Button>
            <Button variant="secondary" size="lg">
            Imprimir balance
            </Button>
        </div>
  );
}

export default BotonesCambiarVistas;