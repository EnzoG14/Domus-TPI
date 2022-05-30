import React from "react";
import {Header,HeaderAdminSitio,HeaderAgentesInmobiliarios,HeaderCajera,
        HeaderGerenteGral,HeaderEmpleadoMarketing,HeaderJefaAdmin,
        HeaderSecretariaDC,HeaderClienteIniciado} from '../../Components'


function ComponenteHeader(props){
    const estadoPantalla = props.estadoPantalla
    if (estadoPantalla === "ClienteSI") {
        return(
            <Header/>
);} else if (estadoPantalla === "AdminSitio") {
        return (
            <HeaderAdminSitio/>
);} else if (estadoPantalla === "AgentesInm") {
        return (
            <HeaderAgentesInmobiliarios/>
);} else if (estadoPantalla === "Cajera") {
        return (
            <HeaderCajera/>
);} else if (estadoPantalla === "EmpleadoMarketing") {
        return (
            <HeaderEmpleadoMarketing/>
);} else if (estadoPantalla === "Gerente") {
        return (
            <HeaderGerenteGral/>
);} else if (estadoPantalla === "JefaAdmin") {
        return (
            <HeaderJefaAdmin/>
);} else if (estadoPantalla === "Secretaria") {
        return (
            <HeaderSecretariaDC/>
);} else if (estadoPantalla === "ClienteIS") {
        return (
            <HeaderClienteIniciado/>
);}
}
export default ComponenteHeader

