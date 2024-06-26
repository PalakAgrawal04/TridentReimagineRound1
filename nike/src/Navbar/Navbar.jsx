
import './navbarStyles.css';
import logo from '../assets/NikeLogoMain.png';
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    return ( 
        <>
            <div className="navbar">
            <div className="nav-left">
                <img onClick={handleLogoClick} className="logo" src={logo} alt=""/>
            </div>
            <div className="nav-right">
                <Link to="/shoes">Shop</Link>
                <Link>Profile</Link>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;