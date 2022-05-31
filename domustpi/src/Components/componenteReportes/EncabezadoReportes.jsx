import React from 'react';
import './ComponenteReportes.css';
import {FormControl, Form, Stack } from 'react-bootstrap';
const EncabezadoReportes = () => {
    return (
        <div className="wrapReporte">
            <Form className="paginacionReporte">
                    <Form.Label className="paginacionReporte">Página: <div className="paginaReporte"> 1 </div> - <div className="paginaReporte"> 13 </div> </Form.Label>
            </Form>
            <Form className="tipoReporte">
                    <Form.Label>Tipo de Inmueble</Form.Label>
                    <Form.Select aria-label="Default select example">
                            <option>Departamento</option>
                            <option>Casa</option>
                            <option>Oficina Comercial</option>
                            <option>Local Comercial</option>
                    </Form.Select>
            </Form>
        </div>
  );
}

export default EncabezadoReportes;