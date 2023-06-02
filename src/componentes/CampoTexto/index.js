import "./CampoTexto.css"
import { useState } from "react"

const CampoTexto = (props) =>{
    const PlaceholderModificado = `${props.placeholder}...`

    const manejarCambio= (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        
        <label>{props.titulo}</label>
        <input
            placeholder={PlaceholderModificado} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto 