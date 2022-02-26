import React, { useEffect, useState }  from "react";
import './Navbar.css';
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

const Navbar = () => {

    let navigate = useNavigate();
    // Hook to trck search input
    const [searchTerm, setSearchTerm]=useState("");
    const [searchResult, setsearchResult]=useState([]);

    const getResponse = async () => {
        const { data } = await axios.get('http://localhost:5000/api/v1/bootcamps');
        setsearchResult(data.data);
    }

    useEffect( () => {
        if(searchTerm){
            getResponse();
        }
        console.log(searchResult, "Search Result");
    }, [searchTerm]);
    
    const searchList = searchResult.map(element => {
            return (
                <div className="resultItem" onClick={getResponse}>{element.courseTitle}</div>
            );
        })

    const onInputChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const onInputSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        setSearchTerm("");
        navigateToSearch();
    }

    const navigateToSearch = () => {
        navigate("search");
    }

    const onMainIconClick = () => {
        navigate("/");
    }

    return (
        <div className="navbar">
            <div>
                <label className="mainIcon" onClick={onMainIconClick}>Dev Oasis</label>
            </div>
            <div>
                <form onSubmit={onInputSubmit} className="inputForm">
                    <div className="searchIconRef" onClick={navigateToSearch}><BsSearch/></div>
                    <input type="text" value={searchTerm} onChange={onInputChange} className="search-bar" placeholder="Search Dev Resources"/>
                </form>
                <div className="searchListItems">
                    {searchList}
                </div>
            </div>
            <div>
                <Button text="Login"/>
                <Button text="SignUp"/>
            </div>
        </div>
    );
};

export default Navbar;