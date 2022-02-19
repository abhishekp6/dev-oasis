import React  from "react";
import './Navbar.css';
import Button from "../components/button/Button";

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <label className="mainIcon">Dev Oasis</label>
            </div>
            <div>
                <input type="text" className="search-bar" placeholder="Search Dev Resources"/>
            </div>
            <div>
                <Button text="Login"/>
                <Button text="SignUp"/>
            </div>
        </div>
    );
};

export default Navbar;