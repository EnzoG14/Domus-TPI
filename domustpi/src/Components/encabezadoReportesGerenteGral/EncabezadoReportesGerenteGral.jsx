import React from 'react';
import RangoFecha from './RangoFecha';
import {BiSearchAlt} from "react-icons/bi"
import {Container,Table,Button,Stack} from 'react-bootstrap';
import './EncabezadoReportesGerenteGral.css';
const EncabezadoReportesGerenteGral = () => {
    return (
        <Stack direction="horizontal" gap={3} className="justify-content-center bg-rosita my-0 mx-3 cajaReportesGteGral">
            <h2>Consultar reportes</h2>
            <RangoFecha/>
            <Button className="outline-customizeee" id="button-addon2">
                <BiSearchAlt size="1.5rem"/> Consultar
            </Button>
        </Stack>
  );
}

export default EncabezadoReportesGerenteGral;