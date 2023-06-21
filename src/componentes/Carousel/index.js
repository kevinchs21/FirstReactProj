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
        <img className="main-img" src="./img/f1.jpg" alt="Juan Aurich"/>
        <p className="legend">Juan Aurich</p>
    </div>
    <div>
        <img className="main-img" src="./img/f2.jpg" alt="AL"/>
        <p className="legend">Alianza Lima</p>
    </div>
    <div>
        <img className="main-img" src="./img/f3.jpg" alt="SC"/>
        <p className="legend">Sporting Cristal</p>
    </div>
    <div>
        <img className="main-img" src="./img/f4.jpg" alt="U"/>
        <p className="legend">Universitario</p>
    </div>
      
</Carousel>
</div>  
}

export default Carosel