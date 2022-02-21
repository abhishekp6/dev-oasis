import React from "react";
import './Banner.css';

const Banner = () => {
    return(
        <div className="banner">
            <div className="headline">Access best in class handpicked web dev resources by experienced Software Engineers.</div>
            <div>
                <img src="/dev.jpg" className="image"/>
            </div>
        </div>
    );
}

export default Banner;