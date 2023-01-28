import React from "react";
import './Banner.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    
    return(
        <div>
            <div className="banner">
                <div className="headline">Access best in class handpicked web dev resources by experienced Software Engineers.</div>
                <div>
                    <img alt="img" src="/dev.jpg" className="image"/>
                </div>
            </div>
            <div className="carouselClass">
                <div className="cardClass">
                    <Carousel swipeable={true} showArrows={true} autoPlay={true} emulateTouch={true} infiniteLoop={true}>
                        
                    </Carousel>
                </div>
                <div className="cardClass">
                    <Carousel swipeable={true} showArrows={true} autoPlay={true} emulateTouch={true} infiniteLoop={true}>
                        
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Banner;