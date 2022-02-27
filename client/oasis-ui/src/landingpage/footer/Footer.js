import React from "react";
import './Footer.css';
import { AiTwotoneHeart } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <label className="mainIconFooter">Dev Oasis</label>
            </div>
            <div className="links">
                <div>
                    <div className="singleLink">Connect with Us</div>
                    <div className="singleLink">Get To Know</div>
                </div>
                <div>
                    <div className="singleLink">Support</div>
                    <div className="singleLink">Careers</div>
                </div>
            </div>
            <div className="endCredits">Made with <AiTwotoneHeart /> from Abhishek</div>
        </div>
    );
}

export default Footer;