import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/index"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar Nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
                />
            <CampoTexto 
                titulo="Puesto" 
                placeholder="Ingresar Puesto"
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar Foto"
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                placeholder="Ingresar Foto"
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario