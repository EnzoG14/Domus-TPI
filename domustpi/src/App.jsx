import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom'
import {Inicio,Catalogo,IniciarSesion,Perfil,AdministrarPropiedades,
  VentaPropiedad,SecretariaDC,QuienesSomos,Clientes,ModificarCatalogo,
  Transacciones,Usuarios,Solicitudes,CalendarioAgentesInmobiliarios,
  CatalogoAgentesInmobiliarios, InformacionPropiedad, CatalogoEmpMarketing, ActualizarPropiedades,
  VisualizarPropiedadesAgentesInmobiliarios,InicioAutenticado,CatalogoAutenticado, 
  CajasCajera,EntSalCajera,TransaccionesCajera, PerfilAgenteInm, PerfilCajera, VisualizarPropiedadEmpMarketing, Reportes
  ,PerfilJefaAdmin,ClientesJefaAdmin,TransaccionesJefaAdmin, PerfilSecretaria, ReportesJefaComer, 
  CalendarioJefaComer, CatalogoJefaComer, PerfilEmpMarketing, ClientesJefaComer, PerfilJefaComer, 
  PerfilGerenteGral, ReportesGerenteGral, UsuariosAdminSitio, VisualizarPropiedadesJefaComer, 
  ReportesJefaAdmin, PerfilAdmin,VentaClientes} from  './Layouts'


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
        <Route exact path="/calendarioAgenteInmobiliario" element={<CalendarioAgentesInmobiliarios/>} />
        <Route exact path="/catalogoAgenteInmobiliario" element={<CatalogoAgentesInmobiliarios/>} />
        <Route exact path="/informacionPropiedad" element={<InformacionPropiedad/>} />
        <Route exact path="/catalogoEmpMarketing" element={<CatalogoEmpMarketing/>} />
        <Route exact path="/actualizarPropiedades" element={<ActualizarPropiedades/>} />
        <Route exact path="/VisualizarPropiedadesAgentesInmobiliarios" element={<VisualizarPropiedadesAgentesInmobiliarios/>} />
        <Route exact path="/visualizarPropiedadEmpMarketing" element={<VisualizarPropiedadEmpMarketing/>} />
        <Route exact path="/inicioAutenticado" element={<InicioAutenticado/>}/>
        <Route exact path="/catalogoAutenticado" element={<CatalogoAutenticado/>}/>
        <Route exact path="/cajasCajera" element={<CajasCajera/>} />
        <Route exact path="/entSalCajera" element={<EntSalCajera/>} />
        <Route exact path="/transaccionesCajera" element={<TransaccionesCajera/>} />
        <Route exact path="/perfilAgenteInm" element={<PerfilAgenteInm/>}/>
        <Route exact path="/perfilCajera" element={<PerfilCajera/>}/>
        <Route exact path="/perfilJefaAdmin" element={<PerfilJefaAdmin/>} />
        <Route exact path="/clientesJefaAdmin" element={<ClientesJefaAdmin/>} />
        <Route exact path="/transaccionesJefaAdmin" element={<TransaccionesJefaAdmin/>} />
        <Route exact path="/perfilSecretaria" element={<PerfilSecretaria/>} />
        <Route exact path="/reportesJefaComer" element={<ReportesJefaComer/>} />
        <Route exact path="/calendarioJefaComer" element={<CalendarioJefaComer/>} />
        <Route exact path="/clientesJefaComer" element={<ClientesJefaComer/>} />
        <Route exact path="/catalogoJefaComer" element={<CatalogoJefaComer/>} />
        <Route exact path="/perfilEmpMarketing" element={<PerfilEmpMarketing/>} />
        <Route exact path="/perfilJefaComer" element={<PerfilJefaComer/>} />
        <Route exact path="/perfilGerenteGral" element={<PerfilGerenteGral/>} />
        <Route exact path="/reportesGerenteGral" element={<ReportesGerenteGral/>} />
        <Route exact path="/usuariosAdminSitio" element={<UsuariosAdminSitio/>} />
        <Route exact path="/visualizarPropiedadesJefaComer" element={<VisualizarPropiedadesJefaComer/>} />
        <Route exact path="/reportesJefaAdmin" element={<ReportesJefaAdmin/>} />
        <Route exact path="/perfilAdmin" element={<PerfilAdmin/>} />
        <Route exact path="/ventaClientes" element={<VentaClientes/>} />
              </Routes>
      </div>
    );
}

export default App;
