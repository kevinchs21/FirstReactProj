import "./Footer.css"

const Footer = () => {
    return  <footer className="footer" style={{backgroundColor:"#403E3E"}}>
    <div className="redes">
        <a href='https://www.facebook.com/kevin.chombasanchez'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://www.linkedin.com/in/kevinchomba21/'> 
            <img src="/img/linkedin.png" alt="twitter" />
        </a>
        <a href='https://www.instagram.com/kevinchomba23/'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
    </div>
     <img className="footer-logo" src='/img/logo.jpg' alt='org' /> 
    <strong>Desarrollado por Kevin Chomba</strong>
</footer>
}

export default Footer