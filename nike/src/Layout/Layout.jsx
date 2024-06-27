import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './layoutStyle.css'

const Layout = () => {
    return ( 
        <body>
            <div className="layout">
                <Navbar/>
                <Outlet/>
            </div>
        </body>
     );
}
 
export default Layout;