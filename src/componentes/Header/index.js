import "./Header.css"


const Header = () =>{
    return <header className="header">    
        <div className="caja">
                <h1><img src="img/logo.jpg"/></h1>
                <nav>
                    <ul>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Equipos</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Header