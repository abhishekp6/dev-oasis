import React, { useState }  from "react";
import './Navbar.css';
import Button from "../../components/button/Button";

const Navbar = () => {

    // Hook to trck search input
    const [searchTerm, setSearchTerm]=useState("");
    
    const onInputChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const onInputSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        setSearchTerm("");
    }
    return (
        <div className="navbar">
            <div>
                <label className="mainIcon">Dev Oasis</label>
            </div>
            <div>
                <form onSubmit={onInputSubmit}>
                    <input type="text" value={searchTerm} onChange={onInputChange} className="search-bar" placeholder="Search Dev Resources"/>
                </form>
            </div>
            <div>
                <Button text="Login"/>
                <Button text="SignUp"/>
            </div>
        </div>
    );
};

export default Navbar;