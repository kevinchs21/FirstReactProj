import "./CampoTexto.css"
import { useState } from "react"

const CampoTexto = (props) =>{
    const PlaceholderModificado = `${props.placeholder}...`

    const {type="text"} = props
    console.log(type)

    const manejarCambio= (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        
        <label>{props.titulo}</label>
        <input
            placeholder={PlaceholderModificado} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default CampoTexto 