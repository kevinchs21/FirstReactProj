
import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header.js';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }
  return (
    <div className="App">
      <Header />
      {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/}
      {mostrarFormulario && <Formulario/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
