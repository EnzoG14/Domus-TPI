import React, { Component } from 'react';
import { Container, Nav} from 'react-bootstrap';
import './singUp.css'
export default class SignUp extends Component {
  render() {
    return (
      <Nav className="colorFondo">
      <div class='anchoContainer'>
      <form>
        <h3 className="alinearTexto">Iniciar Sesion</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ingresar Usuario o Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Ingresar Contraseña"
          />
        </div>
        <div className="d-grid">
          <a type="submit" className="btn btn-primary" href="/Perfil">
            Iniciar Sesion
          </a>
        </div>
        <p className="forgot-password text-right">
          ¿Olvido su contraseña? <a href="/iniciarsesion">Recuperar</a>
        </p>
      </form>
      </div>
      </Nav>
    )
  }
}