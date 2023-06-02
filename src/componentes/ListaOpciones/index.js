import "./ListaOpciones.css"

const ListaOpciones = (props) =>{
   // "Metodo map -> arreglo.map((equipo,index)=>{
    //  
    //})"
    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]
    const manejarCambio = (e) =>{
       // console.log("manejar cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecciona equipo</option>
            {equipos.map((equipo,index)=>{
                return <option key={index} value={equipo}>{equipo}</option>
            })}
        </select>
    </div>
}

export default ListaOpciones