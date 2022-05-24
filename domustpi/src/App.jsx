import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Inicio,Catalogo,IniciarSesion,Perfil,AdministrarPropiedades,VentaPropiedad,SecretariaDC,QuienesSomos,Clientes,ModificarCatalogo,Transacciones,Usuarios,Solicitudes} from  './Layouts'


function App() {
  
    return (
      <div>
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="/catalogo" element={<Catalogo/>} />
        <Route exact path="/iniciarsesion" element={<IniciarSesion/>} />
        <Route exact path="/perfil" element={<Perfil/>} />
        <Route exact path="/administrarpropiedades" element={<AdministrarPropiedades/>} />
        <Route exact path="/ventapropiedad" element={<VentaPropiedad/>} />
        <Route exact path="/secretariadc" element={<SecretariaDC/>} />
        <Route exact path="/quienessomos" element={<QuienesSomos/>} />
        <Route exact path="/clientes" element={<Clientes/>} />
        <Route exact path="/modificarCatalogo" element={<ModificarCatalogo/>} />
        <Route exact path="/transacciones" element={<Transacciones/>} />
        <Route exact path="/usuarios" element={<Usuarios/>} />
        <Route exact path="/solicitudes" element={<Solicitudes/>} />
      </Routes>
      </div>
    );
}

export default App;
