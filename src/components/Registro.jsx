import React, { Component } from 'react';

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	identificacion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // CC, CE o PA
  numero: /^[a-zA-Z0-9\_\-]{4,16}$/, // Numero del ID (Pasaporte debe ser alfanumerico)
  expedicion: /^\d{7,14}$/, // 7 a 14 numeros.
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	dob: /^\d{7,14}$/, // 7 a 14 numeros.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	identificacion: false,
  numero: false,
  expedicion: false,
  nombre: false,
  usuario: false,
	dob: false,
	password: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
    case "identificacion":
			validarCampo(expresiones.identificacion, e.target, 'identificacion');
		break;
    case "numero":
			validarCampo(expresiones.numero, e.target, 'numero');
		break;
    case "expedicion":
			validarCampo(expresiones.expedicion, e.target, 'expedicion');
		break;
    case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
    case "dob":
			validarCampo(expresiones.dob, e.target, 'dob');
		break;
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
    default:
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

// formulario.addEventListener('submit', (e)=>{
//   e.preventDefault();

//   const terminos = document.getElementById('terminos');
// 	if(campos.identificacion && campos.numero && campos.expedicion && campos.nombre && campos.dob && campos.usuario && campos.password 
//     && campos.correo && campos.telefono && terminos.checked ){
// 	  formulario.reset();

// 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		}, 5000);

// 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('formulario__grupo-correcto');
// 		});
// 	} else {
// 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
// 	}
// });


class Registro extends Component {
    render() {
        return (        
            <main>
              <style dangerouslySetInnerHTML={{__html: "\n\t\t\t.formulario { \n\t\t  margin: 10px;\n\t\t  padding: 20px;\n\t\t  border-radius: 20px;\n\t\t  background:rgba(0, 0, 0, 0.72);\n\t\t  width: 100%;\n\t\t  height: 100%;\n\t\t  color: white;\n\t\t  text-decoration: border;\n\t\t  position: relative;\n\t\t  top: 0 ;\n\t\t  left: 0;\n\t\t  }\n\t\t  " }} />
              <form action className="formulario" id="formulario">
                {/* Grupo: Tipo de Documento de Identidad */}
                <div className="formulario__grupo" id="grupo__usuario">
                  <h2><strong>Registro de Usuarios:</strong></h2>
                  <br />
                  <label htmlFor="identificacion" className="formulario__label"><strong>Tipo de Documento de Identidad</strong></label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="identificacion" id="identificacion" placeholder="CC, CE o PA" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El cargo a registrar solo puede ser Usuario o Administrador.</p>
                </div>
                {/* Grupo: Documento de Identidad */}
                <div className="formulario__grupo" id="grupo__telefono">
                  <br /><br /><br />
                  <label htmlFor="numero" className="formulario__label">Documento de Identidad</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="numero" id="numero" placeholder={1033000000} />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El número de identificación debe ser valido, para pasaportes alfanumerico.</p>
                </div>
                {/* Grupo: Fecha de expedicion */}
                <div className="formulario__grupo" id="grupo__telefono">
                  <label htmlFor="expedicion" className="formulario__label">Fecha de Expedicion</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="expedicion" id="expedicion" placeholder="AAAA/MM/DD" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">Utilizar el formato AAAA/MM/DD EJ: 1990/06/09.</p>
                </div>
                {/* Grupo: Nombre Completo */}
                <div className="formulario__grupo" id="grupo__nombre">
                  <label htmlFor="nombre" className="formulario__label">Nombre Completo</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="nombre" id="nombre" placeholder="Nombre Apellido" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El nombre solo puede contener letras.</p>
                </div>
                {/* Grupo: Fecha de Nacimiento */}
                <div className="formulario__grupo" id="grupo__telefono">
                  <label htmlFor="dob" className="formulario__label">Fecha de Nacimiento</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="dob" id="dob" placeholder="AAAA/MM/DD" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">Utilizar el formato AAAA/MM/DD EJ: 1990/06/09.</p>
                </div>
                {/* Grupo: Usuario */}
                <div className="formulario__grupo" id="grupo__usuario">
                  <label htmlFor="usuario" className="formulario__label"><strong>Usuario</strong></label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="usuario" id="usuario" placeholder="Nickname" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El cargo a registrar solo puede ser Usuario o Administrador.</p>
                </div>
                {/* Grupo: Contraseña */}
                <div className="formulario__grupo" id="grupo__password">
                  <label htmlFor="password" className="formulario__label">Contraseña</label>
                  <div className="formulario__grupo-input">
                    <input type="password" className="formulario__input" name="password" id="password" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
                </div>
                {/* Grupo: Contraseña 2 */}
                <div className="formulario__grupo" id="grupo__password2">
                  <label htmlFor="password2" className="formulario__label">Repetir Contraseña</label>
                  <div className="formulario__grupo-input">
                    <input type="password" className="formulario__input" name="password2" id="password2" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
                </div>
                {/* Grupo: Correo Electronico */}
                <div className="formulario__grupo" id="grupo__correo">
                  <label htmlFor="correo" className="formulario__label">Correo Electrónico</label>
                  <div className="formulario__grupo-input">
                    <input type="email" className="formulario__input" name="correo" id="correo" placeholder="correo@dominio.com" />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El correo solo puede contener letras, números, puntos, guiones y guion bajo.</p>
                </div>
                {/* Grupo: Teléfono */}
                <div className="formulario__grupo" id="grupo__telefono">
                  <label htmlFor="telefono" className="formulario__label">Teléfono</label>
                  <div className="formulario__grupo-input">
                    <input type="text" className="formulario__input" name="telefono" id="telefono" placeholder={6014567891} />
                    <i className="formulario__validacion-estado fas fa-times-circle" />
                  </div>
                  <p className="formulario__input-error">El teléfono solo puede contener números y el maximo son 14 dígitos.</p>
                </div>
                {/* Grupo: Terminos y Condiciones */}
                <div className="formulario__grupo" id="grupo__terminos">
                  <label className="formulario__label">
                    <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
                    Acepto los Terminos y Condiciones
                  </label>
                </div>
                <div className="formulario__mensaje" id="formulario__mensaje">
                  <p><i className="fas fa-exclamation-triangle" /> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                </div>
                <div className="formulario__grupo formulario__grupo-btn-enviar">
                  <button type="submit" className="formulario__btn">Registrar</button>
                  <p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Registro enviado exitosamente!</p>
                  <br />
                </div>
              </form>
            </main>

        );
      }
};
 
export default Registro;