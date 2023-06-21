import "./Carousel.css"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Carosel =()=>{
        
    return <div><Carousel 
                    className="main-carousel"
                    showThumbs={false} 
                    autoPlay={true} 
                    ariaLabel="Monserrat"
                    infiniteLoop={true} 
                    interval={2500}
                    showStatus={false}
                    >
    <div>
        <img className="main-img" src="./img/f1.jpg" alt="baldo"/>
        <p className="legend">Baldoria</p>
    </div>
    <div>
        <img className="main-img" src="./img/f2.jpg" alt="baldo"/>
        <p className="legend">Cine</p>
    </div>
    <div>
        <img className="main-img" src="./img/f3.jpg" alt="baldo"/>
        <p className="legend">Baldoria de nuevo xd</p>
    </div>
    <div>
        <img className="main-img" src="./img/f4.jpg" alt="baldo"/>
        <p className="legend">Zorritos</p>
    </div>
      
</Carousel>
</div>  
}

export default Carosel