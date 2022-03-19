import React from "react";
import './CourseDetail.css';
import data from "../../dummyData";
import Button from "../../components/button/Button";
import { connect } from 'react-redux';

const CourseDetail = (props) => {
    
    const courseIncludes = props?.currentCourse?.courseIncludes.map((element) => {
        return <li key={element.courseID}>{element}</li>;
    })
    return(
        <div>
            <div>
                <div className="courseDetail">
                    <div className="courseDetails">
                        <div className="courseTitle">
                            {props?.currentCourse?.courseTitle}
                        </div>
                        <div className="courseDesc">
                            {props?.currentCourse?.courseDesc}
                        </div>
                        <div className="courseStats">
                            <span className="microCourseStats">{props?.currentCourse?.rating}</span>
                            <span className="microCourseStats">{props?.currentCourse?.studentsEnrolled} Students</span>
                            <br/>
                            <span className="microCourseStats">Created By: {props?.currentCourse?.instructor}</span>
                            <br/>
                            <span className="microCourseStats">Last Updated at: {props?.currentCourse?.lastUpdate}</span>
                            <span className="microCourseStats">Language: {props?.currentCourse?.language}</span>
                        </div>
                    </div>
                    <div>
                        <div className="courseCard">
                            <div>
                                <img src={props?.currentCourse?.thumbnail} className="courseMedia"/>
                            </div>
                            <div>
                                <span className="largeFont price">{props?.currentCourse?.price}</span>
                                <div>
                                    {/* <div className="buttonDiv">
                                        <Button text="Buy" />
                                    </div>
                                    <div className="buttonDiv">
                                        <Button text="Add To Cart" />
                                    </div> */}
                                </div>
                                <div className="courseIncludes mediumFont">
                                    This Course includes:
                                    <ul>
                                        {courseIncludes}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="midCourseDetail">

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentCourse: state.currentCourse
    }
}

export default connect(mapStateToProps)(CourseDetail);