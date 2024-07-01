import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './layoutStyle.css'
import { useEffect } from 'react';
import Footer from '../Footer/Footer.jsx';


const Layout = () => {

    return ( 
        <body>
            <div className="layout">
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        </body>
     );
}
 
export default Layout;