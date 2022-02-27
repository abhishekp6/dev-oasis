import React from "react";
import './Banner.css';
import data from '../../dummyData'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    const navigate = useNavigate();
    const courseCarousel = data.map((element) => {
        return(
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/dev.jpg"
                        alt="green iguana"
                        onClick={() => {navigate("search/course")}}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {element.courseTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    })
    return(
        <div>
            <div className="banner">
                <div className="headline">Access best in class handpicked web dev resources by experienced Software Engineers.</div>
                <div>
                    <img src="/dev.jpg" className="image"/>
                </div>
            </div>
            <div className="carouselClass">
                <div className="cardClass">
                    <Carousel swipeable={true} showArrows={true} autoPlay={true} emulateTouch={true} infiniteLoop={true}>
                        {courseCarousel}
                    </Carousel>
                </div>
                <div className="cardClass">
                    <Carousel swipeable={true} showArrows={true} autoPlay={true} emulateTouch={true} infiniteLoop={true}>
                        {courseCarousel}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Banner;