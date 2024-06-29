import "./classicsStyles.css";
import football from "../../assets/nikeFootball.jpeg";
import nikeVideo from "../../assets/nikeVideo.webm";
import flyingNike from "../PagesAssets/flyingNikePeople.jpeg";
import cny from "../PagesAssets/Nike CNY.jpeg";
import neon from "../PagesAssets/NIKEneon.jpeg";
import ppl from "../PagesAssets/nikePPL.jpeg";
import jordan2 from "../shoesPage/ShoesAssets/jordan2.png";
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ShopBySport from "../ShopBySport/ShopBySport";
import SpotlightCard from "../../components/SpotlightCard";
import jordanMain from "../../assets/jordanMain.png";
import blazerMain from "../../assets/blazerMain.png";
import dunkMain from "../../assets/dunkMain.png";
import airForce1 from "../../assets/airForce1.png";
import nextNature from "../../assets/nextNature.png";
import poster from "../PagesAssets/nikePoster.jpeg";
import nikeSportsPoster from "../PagesAssets/nikeSportsPoster.jpeg";
import nikeArt from "../PagesAssets/nikeArt.jpeg";



gsap.registerPlugin(ScrollTrigger);

const Classics = () => {
    const [widthSize, setWidthSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidthSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const benefits = [
        { id: 1, content: "Your Exclusive Access", image: flyingNike },
        { id: 2, content: "Your Customisation service", image: cny },
        { id: 3, content: "How we say thank you", image: neon },
        { id: 4, content: "A celebration of you", image: ppl },
        { id: 5, content: "Your ultimate sneaker community", image: flyingNike },
    ];

    const classicArr = [
        { id: 1, name: "Jordans", image: jordanMain, bgColor: "#D40000", nameColor: "#810000" },
        { id: 2, name: "Blazers", image: blazerMain, bgColor: "white", nameColor: "black" },
        { id: 3, name: "Dunks", image: dunkMain, bgColor: "#FF6B00", nameColor: "#0074ee" },
        { id: 4, name: "Air Force 1", image: nextNature, bgColor: "#00d4c8", nameColor: "white" },
    ];

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const navLinker = document.querySelectorAll("a");
        const boxes = document.querySelectorAll(".contentBene");
        const icons = document.querySelector(".menuIcon");
        const resNav = document.querySelectorAll(".resNavbar");
        const reslinks = document.querySelectorAll(".resLinks");

        const handleMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        document.addEventListener("mousemove", handleMouseMove);

        boxes.forEach((elem) => {
            elem.addEventListener("mouseenter", function() {
                const att = elem.getAttribute("data-image");
                cursor.style.width = "470px";
                cursor.style.height = "370px";
                cursor.style.borderRadius = "0";
                cursor.style.backgroundImage = `url(${att})`;
            });

            elem.addEventListener("mouseleave", function() {
                cursor.style.width = "20px";
                cursor.style.height = "20px";
                cursor.style.borderRadius = "50%";
                cursor.style.backgroundImage = "none";
            });
        });

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".part-1",
                start: "50% 50%",
                end: "150% 50%",
                pin: true,
                pinSpacing: true,
                scrub: true,
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
        });

        tl.to(".topper", {
            rotateX: "100deg",
            opacity: 0,
            duration: 1,
        },"rot").to(".lower", {
            rotateX: "-100deg",
            opacity: 0,
            duration: 1
        },"rot")
        .to("video", {
            height: "100%",
            width: "100vw",
            duration: 5
        })
        .to(".posterImage", {
            height: "80%",
            width: "100vw",
            duration: 5
        },"rot");

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor"></div>
            <div className="classic-part">
                <div className="spotlightTitle">
                    <h1>Classic Spotlight</h1>
                </div>
                <div className="cards-section">
                    <div className="scroll-cards">
                        {classicArr.map((item) => (
                            <SpotlightCard
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                bgColor={item.bgColor}
                                nameColor={item.nameColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="part-1">
                <div className="top-content">
                    <div className="topper">
                        <h1>Check Out</h1>
                    </div>
                </div>
                {widthSize > 650 ? (
                    <video src={nikeVideo} autoPlay muted loop></video>
                ) : (
                    <img className="posterImage" src={nikeArt} alt="" />
                )}
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
                <ShopBySport />
            </div>
            <div className="moreBenefits">
                <div className="benefit-section">
                    <div className="titleBenefits">
                        <h1>More Benefits</h1>
                    </div>
                    <div className="benefitsContent">
                        {benefits.map((item) => (
                            <div key={item.id} className="contentBene" data-image={item.image}>
                                <h2>{item.content}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Classics;
