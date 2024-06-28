
import './navbarStyles.css';
import logo from '../assets/NikeLogoMain.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import gsap from 'gsap';


const Navbar = () => {

    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate("/");
    };

    const [open,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }


    useEffect(() => {
        const t = gsap.timeline();
        if (open) {
            t.to(".resNavbar", {
                right: 0,
                ease: 'power2.inOut'
            })
            .from(".resLinks", {
                opacity: 0,
                stagger: 0.1,
                duration: 0.7,
                ease: "power2.inOut"
            });
        } else {
            t.to(".resNavbar", {
                right: '-100%',
                ease: 'power2.inOut'
            });
        }

        // Cleanup GSAP timeline
        return () => {
            t.kill();
        };
    }, [open]);

    return ( 
        <>
            <div className="navbar">
                <div className="nav-left">
                    <img onClick={handleLogoClick} className="logo" src={logo} alt=""/>
                </div>
                <div className="nav-right">
                    <Link  to="/shoes">Shop</Link>
                    <Link >Profile</Link>
                    
                    {
                        open ? <IoClose className='menuIcon' size={30} onClick={handleOpen} /> : <CgMenuRightAlt size={30} className='menuIcon' onClick={handleOpen} />
                    }
                </div>
                <div className="resNavbar">
                    <div className="links">
                        <Link className='resLinks' to="/">Home</Link>
                        <Link className='resLinks' to="/shoes">Shop</Link>
                        <Link className='resLinks'>Profile</Link>
                        <Link className='resLinks'>Men</Link>
                        <Link className='resLinks'>Women</Link>
                        <Link className='resLinks'>Kids</Link>

                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Navbar;