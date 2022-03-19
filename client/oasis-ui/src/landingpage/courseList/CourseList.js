import React from "react";
import './CourseList.css';
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { selectCourse } from "../../actions";

const CourseList = (props) => {

    // Initialisations
    let navigate = useNavigate();

    //Event Handler Functions
    const navigateToCourseDetails = () => {
        props.selectCourse(props.course);
        navigate("/search/course")
    }
    return(
        <div className="card" onClick={navigateToCourseDetails}>
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

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default connect(mapStateToProps, {selectCourse})(CourseList);