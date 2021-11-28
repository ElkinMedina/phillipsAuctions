import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <main>
              <style dangerouslySetInnerHTML={{__html: "\n\t\t\t.formulario { \n\t\t  margin: 10px;\n\t\t  padding: 20px;\n\t\t  border-radius: 20px;\n\t\t  background:rgba(0, 0, 0, 0.72);\n\t\t  width: 100%;\n\t\t  height: 100%;\n\t\t  color: white;\n\t\t  text-decoration: border;\n\t\t  position: relative;\n\t\t  top: 0 ;\n\t\t  left: 0;\n\t\t  }\n\t\t  " }} />
              <form action className="formulario" id="formulario">
                {/* Grupo: Usuario */}
                <div className="formulario__grupo formulario__grupo-btn-enviar" id="grupo__usuario">
                  <h2><strong>Inicio de Sesion:</strong></h2>
                  <br />
                  <label htmlFor="usuario" className="formulario__label">Usuario</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="usuario" id="usuario" placeholder="User" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">Debe ingresar el usuario registrado</p>
                
                {/* Grupo: Contraseña */}
                <br/>
                  <label htmlFor="password" className="formulario__label">Contraseña</label>
                  <div className="formulario__grupo-input">
                    <input type="password" className="formulario__input" name="password" id="password" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">La contraseña debe tener de 4 a 12 caracteres.</p>
                
                {/* Grupo: Terminos y Condiciones */}
                  <label className="formulario__label">
                    <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
                    Olvidó tu contraseña?
                  </label>
                </div>
                <div className="formulario__mensaje" id="formulario__mensaje">
                  <p><i className="fas fa-exclamation-triangle" /> <b>Error:</b> Por favor ingrese sus credenciales. </p>
                </div>
                <div className="formulario__grupo formulario__grupo-btn-enviar">
                  <button type="submit" className="formulario__btn">Ingresar</button>
                  <br />
                  <p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Bienvenido!</p>
                </div>
              </form>
            </main>
        );
      }
    };
 
export default Login;