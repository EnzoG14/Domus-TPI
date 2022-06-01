import React from 'react';
import Button from 'react-bootstrap/Button';
import './BotonesCambiarVistas.css';


const BotonesCambiarVistas = () => {
    return (
        <div className="d-grid gap-2 cajaBtnCambiarVistas">
            <Button className="btn-customize" variant="primary" size="lg" href="/calendarioAgenteInmobiliario">
            Agente Inmobiliario
            </Button>
            <Button variant="secondary" size="lg" href="/catalogoEmpMarketing">
            Empleado Marketing
            </Button>
            <Button className="btn-customize" variant="primary" size="lg" href="/transaccionesCajera">
            Cajera
            </Button>
            <Button variant="secondary" size="lg" href="/reportesJefaAdmin">
            Jefa de Administración
            </Button>
            <Button className="btn-customize" variant="primary" size="lg" href="/reportesJefaComer">
            Jefa de Comercialización
            </Button>
            <Button variant="secondary" size="lg" href="/secretariaDC">
            Secretaria
            </Button>
            <Button className="btn-customize" variant="primary" size="lg" href="/reportesGerenteGral">
            Gerente General
            </Button>
            <Button variant="secondary" size="lg" href="/usuariosAdminSitio">
            Administrador del sitio
            </Button>
        </div>
  );
}

export default BotonesCambiarVistas;