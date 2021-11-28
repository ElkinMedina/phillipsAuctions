import React from 'react';

import './App.css';
import Login from './components/Login';
import Registro from './components/Registro';
import Inicio from './components/Inicio'
import FormularioRegistro from './components/FormularioRegistro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Inicio/><Login/><Registro/>          
          
        </div>
      </header>
        {/* <body>
          <FormularioRegistro/> 
        </body> */}
    </div>
  );
}

export default App;
