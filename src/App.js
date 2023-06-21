import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Carousel from './componentes/Carousel/index.js';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

import Header from './componentes/Header';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Alianza Lima",
      foto: "https://scontent.fcix1-1.fna.fbcdn.net/v/t1.6435-9/44733966_10216604893373290_7699723523786276864_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHjI7X9bbdlCin2REqo-7O6qVhRawEB2gipWFFrAQHaCFpKqUcUwNAWOGoAjNHjzmnPqcXZXbel357NZSK4SXtP&_nc_ohc=EC7feGgo0oEAX-2Xi-4&_nc_ht=scontent.fcix1-1.fna&oh=00_AfDobzVZpYkaLZe2fkS997nJmfedEy9LJqchKw__-cly2Q&oe=64AAFF90", 
      nombre: "Diego",
      puesto: "Defensa",
      fav:true 
    }, 
    { 
      id: uuid(),
      equipo: "Sporting Cristal", 
      foto: "https://scontent.fcix1-1.fna.fbcdn.net/v/t1.6435-9/33105814_10214550520254236_1123449645180125184_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEYfF3sNcWLNHyG3rnLpkr_CwcI-Tc6JoELBwj5NzomgVVY-PwYmbNvccNtU_Db8bQloXpEiubZnDFvNGZG_rK8&_nc_ohc=A6Se9SiFHFsAX8sH2ng&_nc_ht=scontent.fcix1-1.fna&oh=00_AfAfPW5UVbcn2_nEpb450sY0eyGH-EmUDFskaM5pu-4D6g&oe=64AB1ACD", 
      nombre: "Luiggi",
      puesto: "Volante",
      fav:true
       },
       {
        id: uuid(),
      equipo: "Alianza Lima", 
      foto: "https://scontent.fcix1-1.fna.fbcdn.net/v/t1.18169-9/12928283_1338988246117997_4289633245134128811_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHFFye0in2ecxlTNm8XABsgkafc8mqahDuRp9zyapqEO0rLS0uU1Pa09ASsdXEyurU_GAbMxbaLEotAYpbUPN6F&_nc_ohc=AZf35iBXLvcAX95n5XT&_nc_ht=scontent.fcix1-1.fna&oh=00_AfAUygvSjhtH3a5BqteIrepHEev6AvV7xwlAhrMHjEEcWw&oe=64AB2E3F", 
      nombre: "Rk", 
      puesto: "Portero",
      fav:false
     }, 
     { 
      id: uuid(),
      equipo: "Universitario", 
      foto: "https://scontent.fcix1-1.fna.fbcdn.net/v/t31.18172-8/17834194_1423544614332520_5671023925884542353_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGK6jwjZiTvyZWHDzpDSBNtNIpH46veFAg0ikfjq94UCN0uyYW6AgQimaWzoun0SHfhfVBIt46itFTqnXAMkTIH&_nc_ohc=VX4GxVnScrMAX_SgQjX&_nc_ht=scontent.fcix1-1.fna&oh=00_AfCEELIFyzRkFnhIFhJme__c2eT6bJU_srdkrWQpryvtVg&oe=64BAA619", 
      nombre: "Boris ", 
      puesto: "De lo que sea",
      fav:true
      },
      { 
        id: uuid(),
        equipo: "Juan Aurich", 
        foto:"https://github.com/kevinchs21.png",
        nombre: "kevin Chomba ", 
        puesto: "Desarrollador web",
        fav:true
        },
      { 
        id: uuid(),
        equipo: "Universitario", 
        foto: "https://scontent.fcix1-1.fna.fbcdn.net/v/t1.18169-9/22046040_10155807022532490_1820484036309018141_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEXlK3rN7zJxQ7-u-XMY7wzjA5C4pqCCAWMDkLimoIIBfhumEIMzrFBDpLFiYAWwAj1QEClkN00-SBFtUSKtpWK&_nc_ohc=0FGM1dzVjNYAX977wUH&_nc_ht=scontent.fcix1-1.fna&oh=00_AfCVX8sJ9gurPbhlVzi8pc7jrEpECmuJpDqokjycRsPleA&oe=64BAA562", 
        nombre: "Cieza", 
        puesto: "Centrocampista",
        fav:true
        }
     
  ])

  const [equipos, actualizarEquipos] = useState([
      //lista de equipos
    {
      id: uuid(),
      titulo:"Juan Aurich",
      colorPrimario:"#F11608",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Universitario",
      colorPrimario:"#A51C30",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Alianza Lima",
      colorPrimario:"#1039B0",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Sporting Cristal",
      colorPrimario:"#80DAEB",
      colorSecundario:"#FDE7E8"
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
      <Carousel />
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
