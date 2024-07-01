import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './layoutStyle.css'
import { useEffect } from 'react';
import Footer from '../Footer/Footer.jsx';
import PreLoader from '../Preloader/PreLoader.jsx';


const Layout = () => {
    
    useEffect(() => {
      
    },[]);

    return ( 
        <>
            <div className="layout">
                <PreLoader/>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </div>
        </>
     );
}
 
export default Layout;