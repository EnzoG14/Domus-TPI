import React, { Component } from 'react';
import { Container, Nav} from 'react-bootstrap';
// import './singUp.css'
export default class Registrarse extends Component {
  render() {
    return (
      <Nav className="colorFondo">
      <div class='anchoContainer'>
      <form>
        <h3 className="alinearTexto">Registrarse</h3>
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
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
        <p className="forgot-password text-right">
          ¿Olvido su contraseña? <a href="/sign-in">Recuperar</a>
        </p>
      </form>
      </div>
      </Nav>
    )
  }
}