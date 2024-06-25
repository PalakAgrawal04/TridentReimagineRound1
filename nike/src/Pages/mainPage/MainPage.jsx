import './mainPageStyles.css';
import exceeAirMax from '../../assets/airMaxExcee.png';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import exceeTop from '../PagesAssets/excee 1.png';
import exceeSide from '../PagesAssets/excee 2.png';
import exceeBack from '../PagesAssets/excee 3.png';
import exceeBottom from '../PagesAssets/excee 4.png';
import exceeMain from '../PagesAssets/excee 5.png';

import ShoePics from '../../components/ShoePics';



gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {

    const exceePics = [
        {
            id:1,
            image: exceeTop,
        },
        {
            id:2,
            image: exceeSide,
        },
        {
            id:3,
            image: exceeBack,
        },
        {
            id:4,
            image: exceeBottom,
        },
        {
            id:5,
            image: exceeMain,
        },
    ];

    useEffect(() => {
        let yoyoTimeline = gsap.timeline();

        yoyoTimeline
            .to(".shoe", {
                y: "-30px",
                yoyo: true,
                repeat: -1,
                duration: 1
            }, "animeShoe")
            .to(".circleBlue", {
                y: "-30px",
                yoyo: true,
                repeat: -1,
                duration: 1,
                delay: 0.2
            }, "animeShoe")
            .to(".circlePink", {
                y: "-30px",
                yoyo: true,
                repeat: -1,
                duration: 1,
                delay: 0.3
            }, "animeShoe")
            .to(".shadow", {
                filter: "blur(5px)",
                yoyo: true,
                repeat: -1,
                duration: 1
            }, "animeShoe");

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".shoeInfo",
                start: "0% 95%",
                end: "50% 50%",
                // markers: true,
                scrub: true,
                onEnter: () => {
                    // Pause the yoyoing animations when entering the scroll-triggered timeline
                    yoyoTimeline.pause();
                },
                onLeaveBack: () => {
                    // Resume the yoyoing animations when leaving the scroll-triggered timeline
                    yoyoTimeline.resume();
                }
            }
        });

        tl.to(".shoe", {
            top: "90%",
            left: "45%",
            rotate: "-5deg"
        }, "shoes")
        .to(".shadow", {
            top: "175%",
            right: "10%",
            width: "610px"
        }, "shoes")
        .to(".circleBlue", {
            top: "145%",
            right: "10%",
            height: "120px",
            width: "120px"
        }, "shoes")
        .to(".circlePink", {
            top: "140%",
            left: "60%",
            height: "120px",
            width: "120px"
        }, "shoes");
    }, []);

    return (
        <>
            <div className="landing">
                <h1 className="title">AIR MAX <span>EXCEE</span></h1>
                <div className="image">
                    <img className="shoe" src={exceeAirMax} alt="" data-parallax-speed="0.05" />
                </div>
                <div className="circleBlue" data-parallax-speed="0.08"></div>
                <div className="circlePink" data-parallax-speed="0.1"></div>
                <div className="shadow" data-parallax-speed="0.03"></div>
            </div>
            <div className="shoeInfo">
                <div className="left-info">
                    <div className="leftSide">
                        <div className="shoeName">
                            <h1 className="airmax">Air Max</h1>
                            <h1 className="exceeText">Excee</h1>
                        </div>
                        <div className="price">
                            <p className="priceTag">MRP: ₹8,650</p>
                        </div>
                        <div className="infoPara">
                            <p className="InfoShoes">Inspired by the Nike Air Max 90, these kicks deliver a modern twist on a legendary icon through vibrant colours, elongated design lines and distorted proportions for style that defies time.</p>
                        </div>
                        <div className="choice">
                            <div className="color">
                                <button className="colorCircle1"></button>
                                <button className="colorCircle2"></button>
                                <button className="colorCircle3"></button>
                                <button className="colorCircle4"></button>
                            </div>
                            <div className="size">
                                <select className="sizeChart" name="size" id="">
                                    <option value="">7</option>
                                    <option value="">8</option>
                                    <option value="">9</option>
                                    <option value="">10</option>
                                </select>
                            </div>
                        </div>
                        <div className="btn">
                            <button className="buyNow">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="right-info">
                    <div className="morePics">
                        {exceePics.map((pic) => {
                            return(
                                <ShoePics pics={pic.image}/>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="new-arrivals">
                
            </div>
        </>
    );
}

export default MainPage;
