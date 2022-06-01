import React from 'react';
import RangoFecha from './RangoFecha';
import {BiSearchAlt} from "react-icons/bi"
import {Container,Table,Button,Stack} from 'react-bootstrap';

const EncabezadoReporteTransacciones = () => {
    return (
        <Stack direction="horizontal" gap={3} className="justify-content-center bg-rosita my-0 mx-3">
            <h2>Consultar Transacciones</h2>
            <RangoFecha/>
            <Button className="outline-customizeee" id="button-addon2">
                <BiSearchAlt size="1.5rem"/> Consultar
            </Button>
        </Stack>
  );
}

export default EncabezadoReporteTransacciones;