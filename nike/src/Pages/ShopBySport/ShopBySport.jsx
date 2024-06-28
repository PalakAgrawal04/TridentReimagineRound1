import './sportstyles.css';
import exceeAirMax from '../../assets/airMaxExcee.png';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import basketball from '../PagesAssets/nikeBasketball.jpeg';
import football from '../PagesAssets/nikeFootball.jpeg';
import golf from '../PagesAssets/nikeGolf.jpeg';
import tennis from '../PagesAssets/nikeTennis.jpeg';
import trail from '../PagesAssets/nikeTrail.jpeg';

gsap.registerPlugin(ScrollTrigger);

const ShopBySport = () => {
    useEffect(() => {
        const addHoverEffect = (className, direction) => {
            const elem = document.querySelector(`.elem.${className} .text-div`);
            if (elem) {
                elem.addEventListener('mouseenter', () => {
                    gsap.to(`.text-div.${className} h1`, { x: direction === 'right' ? 400 : -400, duration: 0.5, ease: "power1.inOut" });
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
                addHoverEffect('football', 'left');
                addHoverEffect('tennis', 'left');
            },
            // Mobile
            "(max-width: 650px)": function() {
                // You can add specific behavior for mobile here if needed
            }
        });
    }, []);
    
    return (
        <>
            <div class="page4">
                <div class="elem basketball">
                    <img src={basketball} alt=""/>
                    <div class="text-div basketball">
                        <h1>Basketball</h1>
                    </div>
                </div>
                <div class="elem football">
                    <div class="text-div football">
                        <h1>Football</h1>
                    </div>
                    <img src={football} alt=""/>
                </div>
                <div class="elem golf">
                    <img src={golf} alt=""/>
                    <div class="text-div golf">
                        <h1>Golf</h1>
                    </div>
                </div>
                <div class="elem tennis">
                    <div class="text-div tennis">
                        <h1>Tennis</h1>
                    </div>
                    <img src={tennis} alt=""/>
                </div>
                <div class="elem trail">
                    <img src={trail} alt=""/>
                    <div class="text-div trail">
                        <h1>Trail</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ShopBySport;
