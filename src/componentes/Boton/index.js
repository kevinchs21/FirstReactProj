import "./Boton.css"

const Boton = (props) =>{
    console.log("boton", props)
    return <div>
        <button className="boton">{props.texto}</button>
    </div>
}

export default Boton