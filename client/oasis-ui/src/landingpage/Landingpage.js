import React  from "react";
import Navbar from "./navbar/Navbar";
import './Landingpage.css';
import Banner from "./banner/Banner";
import CourseList from "./courseList/CourseList";
import data from "../dummyData";

const Landingpage = () => {

    const courseListArr = data.map((element) => {
        return <CourseList key={element.courseID} course={element}/>
    })
    console.log(courseListArr)
    return (
        <div>
            <div className="top">
                <Navbar />
            </div>
            <div className="mid">
                <Banner />
            </div>
            <div>
                {courseListArr}
            </div>
        </div>
    );
}

export default Landingpage;