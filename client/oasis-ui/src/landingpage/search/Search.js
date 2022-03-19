import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import './Search.css';
import { selectCourse } from "../../actions";
import { connect } from 'react-redux';

const Search = (props) => {

    /*****************Initialisations*******************/

    // Navigation Variable
    let navigate = useNavigate();
    let ref = useRef();

    // Hook to track search input
    const [searchTerm, setSearchTerm]=useState("");
    const [searchResult, setSearchResult]=useState([]);
    const [searchList, setSearchList]=useState([]);
    const [showSearchResult, setShowSearchResult]=useState(false);
    /*****************Initialisations*******************/

    /***********************API Calls***************************/
    // Call Search API
    const getResponse = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/v1/bootcamps/search/${searchTerm}`);
        setSearchResult(data.data);
        setSearchList(searchListArr);
    }
    /***********************API Calls***************************/

    /**************************Life Cycle Methods********************************/

    // Called at initialisation and every time search term changes
    useEffect( () => {
        if(searchTerm){
            getResponse();
        }
        else{
            setSearchList([]);
        }
        console.log(searchResult, "Search Result");
    }, [searchTerm]);

    //called once on initialisation
    useEffect( () => {
        window.addEventListener('click', (event) =>{
            if(!ref.current.contains(event.target)){
                //Hide searchlist
                setShowSearchResult(false);
            }
            else{
                setShowSearchResult(true);
            }
        })
    }, []);
    
    let searchListArr = searchResult.map(element => {
            return (
                <div className="resultItem" onClick={() => openCourseDetail(element)}>{element.courseTitle}</div>
            );
        })

    /**************************Life Cycle Methods********************************/

    /*************************Function on Events********************************/

    // Set search term state
    const onInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    // On submit
    const onInputSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        setSearchTerm("");
        navigateToSearch();
    }

    const openCourseDetail = (element) => {

        //Call action reducer with action creator and set new state
        //Then reroute to course Detail
        props.selectCourse(element);
        setSearchTerm("");
        navigate("/search/course")
        
    } 

    const navigateToSearch = () => {
        navigate("search");
    }

    /*********************************************************/

    return(
        <div ref={ref}>
            <form onSubmit={onInputSubmit} className="inputForm">
                <div className="searchIconRef" onClick={navigateToSearch}><BsSearch/></div>
                <input type="text" value={searchTerm} onChange={onInputChange} className="search-bar" placeholder="Search Dev Resources"/>
            </form>
            <div className={`searchListItems ${showSearchResult === true ? 'showDiv' : 'hideDiv'}`}>
                {searchList}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {selectedCourse : state.currentCourse};
}

export default connect(mapStateToProps, {
    selectCourse
})(Search);