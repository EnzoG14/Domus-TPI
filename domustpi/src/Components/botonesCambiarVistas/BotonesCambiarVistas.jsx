import React from 'react';
import Button from 'react-bootstrap/Button';


const BotonesCambiarVistas = () => {
    return (
        <div className="d-grid gap-2 btn-caja">
            <Button className="btn-customize" variant="primary" size="lg" href="/calendarioAgenteInmobiliario">
            Cerrar caja
            </Button>
            <Button variant="secondary" size="lg">
            Imprimir balance
            </Button>
            <Button variant="secondary" size="lg">
            Imprimir balance
            </Button>
            <Button variant="secondary" size="lg">
            Imprimir balance
            </Button>
            <Button variant="secondary" size="lg">
            Imprimir balance
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