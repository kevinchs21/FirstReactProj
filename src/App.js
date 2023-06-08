
import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([])

   const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador

  const registrarColaborador = (colaborador) =>{
       console.log("nuevo colaborador", colaborador)
       actualizarColaboradores([...colaboradores, colaborador])
    }

  //lista de equipos
  const equipos = [
    {
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      titulo:"Innovacion y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ]

  return (
    <div className="App">
      <Header />
      {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/}
      
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
            registrarColaborador ={registrarColaborador}
          />
        }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo)=><Equipo
         datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo ===  equipo.titulo)}
          />) 
      }

      <Footer/>
      

    </div>
  );
}

export default App;
