import "./classicsStyles.css";
import football from "../../assets/nikeFootball.jpeg";
import nikeVideo from "../../assets/nikeVideo.webm";
import flyingNike from "../PagesAssets/flyingNikePeople.jpeg";
import cny from "../PagesAssets/Nike CNY.jpeg";
import neon from "../PagesAssets/NIKEneon.jpeg";
import ppl from "../PagesAssets/nikePPL.jpeg";
import jordan2 from "../shoesPage/ShoesAssets/jordan2.png";
import { useEffect } from 'react';
import {useGSAP} from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShopBySport from "../ShopBySport/ShopBySport";
import SpotlightCard from "../../components/SpotlightCard";
import jordanMain from "../../assets/jordanMain.png";
import blazerMain from "../../assets/blazerMain.png";
import dunkMain from "../../assets/dunkMain.png";
import airForce1 from "../../assets/airForce1.png";
import nextNature from "../../assets/nextNature.png";




gsap.registerPlugin(ScrollTrigger);

const Classics = () => {

    const benefits = [
        {
            id:1,
            content:"Your Exclusive Access",
            image: flyingNike,
        },
        {
            id:2,
            content:"Your Customisation service",
            image: cny,

        },
        {
            id:3,
            content:"How we say thank you",
            image: neon,

        },
        {
            id:4,
            content:"A celebration of you",
            image: ppl,

        },
        {
            id:5,
            content:"Your ultimate sneaker community",
            image: flyingNike,

        },
    ];

    const classicArr = [
        {
            id:1,
            name:"Jordans",
            image: jordanMain,
            bgColor:"#D40000",
            nameColor:"#810000",
        },
        {
            id:2,
            name:"Blazers",
            image: blazerMain,
            bgColor:"white",
            nameColor:"black",
        },
        {
            id:3,
            name:"Dunks",
            image: dunkMain,
            bgColor:"#FF6B00",
            nameColor:"#0074ee",
        },
        {
            id:4,
            name:"Air Force 1",
            image: nextNature,
            bgColor:"#00d4c8",
            nameColor:"white",
        },

    ]

    const {contextSafe} = useGSAP();
    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const navLinker = document.querySelectorAll("a");
        const boxes = document.querySelectorAll(".contentBene");
        const icons = document.querySelector(".menuIcon");
        const resNav = document.querySelectorAll(".resNavbar");
        const reslinks = document.querySelectorAll(".resLinks");


        document.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        boxes.forEach((elem) => {
            elem.addEventListener("mouseenter",function(){
                var att = elem.getAttribute("data-image")
                cursor.style.width = "470px"
                cursor.style.height = "370px"
                cursor.style.borderRadius = "0"
                cursor.style.backgroundImage = `url(${att})`
            })
            elem.addEventListener("mouseleave",function(){
                elem.style.backgroundColor = "transparent"
                cursor.style.width = "20px"
                cursor.style.height = "20px"
                cursor.style.borderRadius = "50%"
                cursor.style.backgroundImage = `none`
            })
        });

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".part-1",
                    start: "50% 50%",
                    end: "150% 50%",
                    // markers: true,
                    pin: true,
                    pinSpacing: true,
                    scrub:true,
                    onEnter: () => {
                        gsap.to(".part-1", { backgroundColor: "black" });
                        gsap.to(resNav, { backgroundColor: "black" });
                        gsap.to(".topper h1", { color: "white" });
                        gsap.to(".lower h1", { color: "white" });
                        gsap.to(navLinker, { color: "white" });
                        gsap.to(icons, { color: "white" });
                        gsap.to(reslinks, { color: "white" });
                    },
                    onLeaveBack: () => {
                        gsap.to(".part-1", { backgroundColor: "" });
                        gsap.to(resNav, { backgroundColor: "" });
                        gsap.to(".topper h1", { color: "" });
                        gsap.to(".lower h1", { color: "" });
                        gsap.to(navLinker, { color: "" });
                        gsap.to(icons, { color: "" });
                        gsap.to(reslinks, { color: "" });
                    }
                }
                
            })

            // tl.to(icons,{
            // },"color");
            // tl.to(resNav,{
            //     backgroundColor:"black"
            // },"color");
            // tl.to(reslinks,{
            //     color:"white"
            // },"color");
            // tl.to(navLinker,{
            //     color:"white"
            // },"color");
            
            // tl.to(".part-1",{
            //     backgroundColor:"black",
            // },"color")
            tl.to(".topper h1",{
                color:"white"

            },"color")
            tl.to(".lower h1",{
                color:"white"
            },"color")

            tl.to(".topper", {
                rotateX:"100deg",
                opacity:0,
                duration:1
            },"anime")
            tl.to(".lower", {
                rotateX:"-100deg",
                opacity:0,
                duration:1
            },"anime")
            tl.to("video", {
                height:"100%",
                width:"100vw",
                duration:5

            })
    }, []);
    

    return (
        <>
            <div class="cursor"></div>

                <div className="classic-part">
                    <div className="spotlightTitle">
                        <h1>Classic Spotlight</h1>
                    </div>
                    <div className="cards-section">
                        <div className="scroll-cards">
                            {
                                classicArr.map((item) => {
                                    return(
                                        <>
                                            <SpotlightCard key={item.id} name={item.name} image={item.image} bgColor={item.bgColor} nameColor={item.nameColor} />
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="part-1">
                    <div className="top-content">
                        <div className="topper">
                            <h1>Check Out</h1>
                        </div>
                    </div>
                    <video src={nikeVideo} autoPlay muted loop></video>
                    {/* <img src={football} alt="" /> */}
                    <div className="bottom-content">
                        <div className="lower">
                            <h1>Nike Sports</h1>
                        </div>
                    </div>
                </div>

                <div className="part-4">
                    <div className="sportsTitle">
                        <h1>Shop by sport</h1>
                    </div>
                        <ShopBySport/>
                </div>

                <div className="moreBenefits">
                    <div className="benefit-section">
                        <div className="titleBenefits">
                            <h1>More Benefits</h1>
                        </div>
                        <div className="benefitsContent">
                            {
                                benefits.map((item) => {
                                    return(
                                        <>
                                            <div key={item.id} className="contentBene" data-image={item.image}>
                                                <h2>{item.content}</h2>
                                            </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                    
                </div>

        </>
    );
}

export default Classics;
