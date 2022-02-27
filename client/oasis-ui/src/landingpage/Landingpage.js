import React  from "react";
import Navbar from "./navbar/Navbar";
import './Landingpage.css';
import Banner from "./banner/Banner";
import CourseDetail from "./courseDetail/CourseDetail";
import Search from "./search/Search";
import { Routes, Route } from 'react-router-dom';
import Footer from './footer/Footer';

const Landingpage = () => {

    return (
        <div>
            <div className="top">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="search" element={<Search />} />
                <Route path = "search/course" element={<CourseDetail />} />
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Landingpage;