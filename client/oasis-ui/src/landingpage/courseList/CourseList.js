import React from "react";
import './CourseList.css';

const CourseList = (props) => {
    console.log(props.course)
    return(
        <div className="card">
            <div>
                <img src={props.course.thumbnail} className="courseImage"/>
            </div>
            <div className="courseContent">
                <h3>{props.course.courseTitle}</h3>
                <p className="mediumFont">{props.course.courseDesc}</p>
                <p className="smallFont">{props.course.instructor}</p>
                <p className="smallFont">{props.course.rating}</p>
                <div className="smallFont footerContent">
                    <span className="cardFooter">{props.course.contentLength}</span>
                    <li className="cardFooter">{props.course.lectureCount}</li>
                    <li className="cardFooter">{props.course.level}</li>
                </div>
            </div>
            <div className="price">
                Buy {props.course.price}
            </div>
        </div>
    );
}

export default CourseList;