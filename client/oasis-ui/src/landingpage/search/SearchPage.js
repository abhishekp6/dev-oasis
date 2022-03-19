import React from "react";
import CourseList from "../courseList/CourseList";
import { useEffect, useState } from 'react';
import axios from 'axios';


const SearchPage = () => {

    //States
    const [courseListArr, setCourseListArr] = useState([]);
    
    //Intial function calls in useEffect
    useEffect(() => {
        getAllCourses();
    }, []);

    // Get all Courses API call
    const getAllCourses = async () => {
        let data = await axios.get(`http://localhost:5000/api/v1/bootcamps`)
        data = data.data.data;
        setData(data);
    }

    const setData = (data) => {
        const courseListArrVar = data.map((element) => {
            return <CourseList key={element._id} course={element}/>
        })
        setCourseListArr(courseListArrVar);
    }

    return (
        <div>
            {courseListArr}
        </div>
    );
}

export  default SearchPage;