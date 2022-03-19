import './Navbar.css';
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import Search from '../search/Search';

const Navbar = () => {

    // Navigation Variable
    let navigate = useNavigate();

    const onMainIconClick = () => {
        navigate("/");
    }

    return (
        <div className="navbar">
            <div>
                <label className="mainIcon" onClick={onMainIconClick}>Dev Oasis</label>
            </div>
            <div>
                <Search />
            </div>
            <div>
                <Button text="Login"/>
                <Button text="SignUp"/>
            </div>
        </div>
    );
};

export default Navbar;