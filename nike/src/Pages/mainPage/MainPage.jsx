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
import Classics from '../Classics/Classics';
import { useGSAP } from '@gsap/react';
import NewArrvials from '../NewArrivals/NewArrivals';
import { useRef } from 'react';




gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {

    const landRef = useRef();

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

    const colorCircles = [
        {
            id:1,
            color:"black",
        },
        {
            id:2,
            color:"blue",
        },
        {
            id:3,
            color:"red",
        },
        {
            id:4,
            color:"pink",
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
                delay: 1,
                duration:1
            }, "animeShoe");

        ScrollTrigger.matchMedia({
            // Desktop
            "(min-width: 651px)": function() {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".shoeInfo",
                        start: "0% 95%",
                        end: "50% 50%",
                        // markers: true,
                        scrub: true,
                        onEnter: () => {
                            yoyoTimeline.pause();
                        },
                        onLeaveBack: () => {
                            yoyoTimeline.resume();
                        }
                    }
                });

                tl.to(".shoe", {
                    top: "90%",
                    left: "50%",
                    rotate: "-5deg"
                }, "shoes")
                .to(".shadow", {
                    top: "165%",
                    right: "10%",
                    width: "610px"
                }, "shoes")
                .to(".circleBlue", {
                    top: "135%",
                    right: "7%",
                    height: "120px",
                    width: "120px"
                }, "shoes")
                .to(".circlePink", {
                    top: "140%",
                    left: "45%",
                    height: "120px",
                    width: "120px"
                }, "shoes");
            },
            // Mobile
            "(max-width: 650px)": function() {
                let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".shoeInfo",
                        start: "0% 95%",
                        end: "50% 50%",
                        scrub: true,
                        onEnter: () => {
                            yoyoTimeline.pause();
                        },
                        onLeaveBack: () => {
                            yoyoTimeline.resume();
                        }
                    }
                });

                tl.to(".shoe", {
                    top: "112%",
                    left: "0%",
                    rotate: "-5deg"
                }, "shoes")
                .to(".shadow", {
                    top: "145%",
                    right: "5%",
                    width: "330px"
                }, "shoes")
                .to(".circleBlue", {
                    top: "125%",
                    right: "-5%",
                    height: "80px",
                    width: "80px"
                }, "shoes")
                .to(".circlePink", {
                    top: "130%",
                    left: "20%",
                    height: "80px",
                    width: "80px"
                }, "shoes");
            }
        });
        return () => {
            yoyoTimeline.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    

    return (
        <>
            <div className="landing">
                <h1 className="title">AIR MAX <span>EXCEE</span></h1>
                <div className="image">
                    <img className="shoe" src={exceeAirMax} alt="" data-parallax-speed="0.05" />
                    <button
                    onClick={() => {
                        landRef.current?.scrollIntoView({
                            behavior:"smooth"
                        });
                    }}
                    className='Shopbutton'>Shop Now</button>
                </div>
                <div className="circleBlue" data-parallax-speed="0.08"></div>
                <div className="circlePink" data-parallax-speed="0.1"></div>
                <div className="shadow" data-parallax-speed="0.03"></div>
            </div>
            <div ref={landRef} className="shoeInfo">
                <div className="left-info">
                    <div className="leftSide">
                        <div className="shoeName">
                            <h1 className="airmax">Air Max</h1>
                            <h1 className="exceeText">Excee</h1>
                        </div>
                        <div className="price">
                            <h1 className="priceTag">MRP: ₹8,650</h1>
                        </div>
                        <div className="infoPara">
                            <p className="InfoShoes">Inspired by the Nike Air Max 90, these kicks deliver a modern twist on a legendary icon through vibrant colours, elongated design lines and distorted proportions for style that defies time.</p>
                        </div>
                        <div className="choice">
                            <div className="color">
                                {
                                    colorCircles.map((circle) => {
                                        return(
                                            <>
                                                <button
                                                    key={circle.id}
                                                    className='colorCircle'
                                                    style={{ backgroundColor: circle.color }}
                                                ></button>
                                            </>
                                        );
                                    })
                                }
                               
                            </div>
                            <div className="size">
                                <select className="sizeChart" name="size" id="">
                                    <option value="" disabled selected>
                                        Size
                                    </option>
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
                <NewArrvials/>
            </div>
            <div className="mainClassics">
                <Classics/>
            </div>
        </>
    );
}

export default MainPage;
