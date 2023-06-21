import "./miorg.css"

const MiOrg = (props) => {
    return <section className="orgSection">
        <h3 className="title">Mi Equipo</h3>
        <img src="./img/add.png" alt="Mi org" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg