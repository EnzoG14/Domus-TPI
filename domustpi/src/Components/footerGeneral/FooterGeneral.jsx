import React from 'react';
import './FooterGeneral.css';
import {Navbar, Nav, Container, Button,Stack} from 'react-bootstrap';
 import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
 import { CFooter,CLink } from '@coreui/react'

const FooterGeneral = () => {
    return (
  // <Nav className='justify-content-center footer '>
  //     <Stack direction="horizontal" gap={1}>
  //       <Stack direction="horizontal">
  //       <div>© Domus, 2022. Todos los derechos reservados.</div>
  //       </Stack>
  //       <Stack direction="horizontal" gap={2}>
          
  //            <FaFacebook />
  //            <FaGithub />
  //            <FaTwitter/>
  //            <FaInstagram/>
          
  //       </Stack>
  //     </Stack>
     
  // </Nav>
  
  <CFooter>
  <div class="text-align-center">
    <span>© Domus, 2022. Todos los derechos reservados</span>
  </div>
  <div class="iconos">
      <CLink href="facebook.com" class="icono">
        <FaFacebook />
      </CLink>
      <CLink href="twitter.com" class="icono">
        <FaTwitter/>
      </CLink>
      <CLink href="instagram.com" class="icono">
        <FaInstagram/>
      </CLink>
  </div>
</CFooter>
  );
}

export default FooterGeneral;