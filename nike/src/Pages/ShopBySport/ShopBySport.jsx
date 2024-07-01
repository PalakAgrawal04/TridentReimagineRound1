import './sportstyles.css';
import exceeAirMax from '../../assets/airMaxExcee.png';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import basketball from '../PagesAssets/nikeBasketball.jpeg';
import basketball1 from '../PagesAssets/nikebasketball.jpg';
import football from '../PagesAssets/nikeFootball.jpeg';
import football1 from '../PagesAssets/nikefootball.jpg';
import golf from '../PagesAssets/nikeGolf.jpeg';
import golf1 from '../PagesAssets/nikegolf.jpg';
import tennis from '../PagesAssets/nikeTennis.jpeg';
import tennis1 from '../PagesAssets/niketennis.jpg';
import trail from '../PagesAssets/nikeTrail.jpeg';
import trail1 from '../PagesAssets/niketrail.jpg';

gsap.registerPlugin(ScrollTrigger);

const ShopBySport = () => {
    useEffect(() => {
        const addHoverEffect = (className, direction) => {
            const elem = document.querySelector(`.elem.${className} .text-div`);
            if (elem) {
                elem.addEventListener('mouseenter', () => {
                    // gsap.to(.text-div.${className} h1, { x: direction === 'right' ? 400 : -400, duration: 0.5, ease: "power1.inOut" });
                    gsap.to(`.text-div:not(.${className}) h1`, { opacity: 0.1, duration: 0.5, ease: "power1.inOut" });
                });
                elem.addEventListener('mouseleave', () => {
                    gsap.to(`.text-div.${className} h1`, { x: 0, duration: 0.5, ease: "power1.inOut" });
                    gsap.to(`.text-div:not(.${className}) h1`, { opacity: 1, duration: 0.5, ease: "power1.inOut" });
                });
            }
        };

        ScrollTrigger.matchMedia({
            // Desktop
            "(min-width: 651px)": function() {
                addHoverEffect('basketball', 'right');
                addHoverEffect('golf', 'right');
                addHoverEffect('trail', 'right');
                addHoverEffect('football', 'center');
                addHoverEffect('tennis', 'left');
            },
            // Mobile
            "(max-width: 650px)": function() {
                
                addHoverEffect('basketball', '');
                addHoverEffect('golf', '');
                addHoverEffect('trail', '');
                addHoverEffect('football', '');
                addHoverEffect('tennis', '');
            }
        });
    }, []);
    
    return (
        <>
            <div className="page4">
                <div className="page4-content">
                    <div className="elem basketball">
                        <img src={basketball1} 
                        style={{
                            height:"330px",
                            width:"500px",
                            borderRadius:"10px",
                            }}
                        alt=""/>
                        <div className="text-div basketball">
                            <h1>Basketball</h1>
                        </div>
                        <img src={basketball} 
                        style={{
                            height:"520px",
                            width:"370px",
                            borderRadius:"10px",
                            }}
                        alt=""/>
                    </div>
                    <div className="elem football">
                    <img src={football1} 
                    style={{
                        height:"520px",
                        width:"400px",
                        borderRadius:"10px",
                        }}
                    alt=""/>
                        <div className="text-div football">
                            <h1>Football</h1>
                        </div>
                        <img src={football} 
                        style={{
                            height:"300px",
                            width:"450px",
                            borderRadius:"10px",
                            }}
                        alt=""/>
                    </div>
                    <div className="elem golf">
                        <img src={golf} 
                        style={{
                            height:"300px",
                            width:"450px",
                            borderRadius:"10px",
                            }}
                        alt=""/>
                        <div className="text-div golf">
                            <h1>Golf</h1>
                        </div>
                        <img src={golf1} 
                        style={{
                            height:"450px",
                            width:"300px",
                            borderRadius:"10px",
                            }}
                        alt=""/>
                    </div>
                    <div className="elem tennis">
                    <img src={tennis} 
                    style={{
                        height:"400px",
                        width:"300px",
                        borderRadius:"10px",
                        }}
                    alt=""/>
                        <div className="text-div tennis">
                            <h1>Tennis</h1>
                        </div>
                        <img src={tennis1} 
                        style={{
                            height:"400px",
                            width:"300px",
                            borderRadius:"10px",
                            }}
                        alt=""/>
                    </div>
                    <div className="elem trail">
                        <img src={trail} style={{
                            height:"400px",
                            width:"350px",
                            borderRadius:"10px",
                            }}
                        alt=""/>
                        <div className="text-div trail">
                            <h1>Trail</h1>
                        </div>
                        <img src={trail1} 
                        style={{
                            height:"400px",
                            width:"350px",
                            borderRadius:"10px",
                            }}
                        alt=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopBySport;