
import './navbarStyles.css';
// import {Link, Navlink} from 'react-router-dom';
import logo from '../assets/NikeLogoMain.png';


const Navbar = () => {
    return ( 
        <>
            <div className="navbar">
            <div className="nav-left">
                <img className="logo" src={logo} alt=""/>
            </div>
            <div className="nav-right">
                <h4>Shop</h4>
                <h4>Profile</h4>
            </div>
        </div>
        </>
     );
}
 
export default Navbar;