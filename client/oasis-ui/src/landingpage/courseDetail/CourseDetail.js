import React from "react";
import './CourseDetail.css';
import data from "../../dummyData";
import Button from "../../components/button/Button";

const CourseDetail = () => {
    const courseIncludes = data[0].courseIncludes.map((element) => {
        return <li key={element.courseID}>{element}</li>;
    })
    return(
        <div>
            <div>
                <div className="courseDetail">
                    <div className="courseDetails">
                        <div className="courseTitle">
                            {data[0].courseTitle}
                        </div>
                        <div className="courseDesc">
                            {data[0].courseDesc}
                        </div>
                        <div className="courseStats">
                            <span className="microCourseStats">{data[0].rating}</span>
                            <span className="microCourseStats">{data[0].studentsEnrolled} Students</span>
                            <br/>
                            <span className="microCourseStats">Created By: {data[0].instructor}</span>
                            <br/>
                            <span className="microCourseStats">Last Updated at: {data[0].lastUpdate}</span>
                            <span className="microCourseStats">Language: {data[0].language}</span>
                        </div>
                    </div>
                    <div>
                        <div className="courseCard">
                            <div>
                                <img src={data[0].thumbnail} className="courseMedia"/>
                            </div>
                            <div>
                                <span className="largeFont price">{data[0].price}</span>
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

export default CourseDetail;