import React from 'react';
import './FooterGeneral.css';
import {Navbar, Nav, Container, Button,Stack} from 'react-bootstrap';


const FooterGeneral = () => {
    return (
  <Nav className='justify-content-center footer '>
      <Stack direction="horizontal" gap={1}>
        <Stack direction="horizontal">
          <img src={require('./src/logoFooter.png')} alt='logo' class='logo'/>
        </Stack>
        <Stack direction="horizontal">
        <div>© Domus, 2022. Todos los derechos reservados.</div>
        </Stack>
        <Stack direction="horizontal" gap={2}>
          {/* agregar iconos */}
        </Stack>
      </Stack>
  </Nav>
  );
}

export default FooterGeneral;