import React from "react";
import data from "../../dummyData";
import CourseList from "../courseList/CourseList";


const SearchPage = () => {
    const courseListArr = data.map((element) => {
        return <CourseList key={element.courseID} course={element}/>
    })
    return (
        <div>
            {courseListArr}
        </div>
    );
}

export  default SearchPage;