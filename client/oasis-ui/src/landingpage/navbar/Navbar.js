import './Navbar.css';
import { useNavigate } from "react-router-dom";
import Search from '../search/Search';
import Login from '../../authentication/Login';

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
                <Login />
            </div>
        </div>
    );
};

export default Navbar;