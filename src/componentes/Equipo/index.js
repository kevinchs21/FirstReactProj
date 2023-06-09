import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{

    //destructuracion
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const colorFondo = {backgroundColor:hexToRgba(colorPrimario,0.6)}
    const estiloTitulo = {borderColor: colorPrimario}
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    return <>{ colaboradores.length > 0 &&
            <section className="equipo" style={colorFondo}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(event) =>{
                        actualizarColor(event.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                
                <div className="colaboradores">
                {
                    colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador}
                    key ={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
                </div>
        </section>
    }</>
}

export default Equipo