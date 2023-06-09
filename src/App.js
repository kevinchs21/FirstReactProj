
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png", 
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true 
    }, 
    { 
      id: uuid(),
      equipo: "Programación", 
      foto: "https://github.com/genesysaluralatam.png", 
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav:true
       },
       {
        id: uuid(),
      equipo: "UX y Diseño", 
      foto: "https://github.com/JeanmarieAluraLatam.png", 
      nombre: "Jeanmarie Quijada", 
      puesto: "Instructora en Alura Latam",
      fav:false
     }, 
     { 
      id: uuid(),
      equipo: "Programación", 
      foto: "https://github.com/christianpva.png", 
      nombre: "Christian Velasco", 
      puesto: "Head de Alura e Instructor",
      fav:true
      },
      { 
        id: uuid(),
      equipo: "Innovacion y Gestión", 
      foto: "https://github.com/JoseDarioGonzalezCha.png", 
      nombre: "Jose Gonzalez", 
      puesto: "Dev FullStack",
      fav:false
    }
  ])

  const [equipos, actualizarEquipos] = useState([
      //lista de equipos
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovacion y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])

   const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }

  //register colaborador

  const registrarColaborador = (colaborador) =>{
       console.log("nuevo colaborador", colaborador)
       actualizarColaboradores([...colaboradores, colaborador])
    }

    //delete colaborador
    const eliminarColaborador = (id) =>{
      const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
      actualizarColaboradores(nuevosColaboradores)     
    }

    //update Color
    const actualizarColor = (color, id) =>{
     // console.log("actualizar color", color, id)
      const equiposActualizados = equipos.map((equipo)=>{
        if(equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
      })

      actualizarEquipos(equiposActualizados)
    }

    //crear equipo nuevo formulario
    const crearEquipo = (nuevoEquipo) =>{
      console.log(nuevoEquipo)
      actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid}])
    }

    //hit like
    const like =(id)=>{
      console.log("like ",id)
      const colaboradorActualizados = colaboradores.map((colaborador) =>{
        if(colaborador.id === id){
            colaborador.fav = !colaborador.fav
        }
        return colaborador
      })
      actualizarColaboradores(colaboradorActualizados)
    }

  return (
    <div className="App">
      <Header />
      {/*mostrarFormulario === true ? <Formulario/> : <div></div>*/}
      
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
            registrarColaborador ={registrarColaborador}
            crearEquipo={crearEquipo}
          />
        }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo)=><Equipo
        datos={equipo}
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo ===  equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
          />) 
      }

      <Footer/>
      

    </div>
  );
}

export default App;
