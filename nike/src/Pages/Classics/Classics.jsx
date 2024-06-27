import "./classicsStyles.css";
import football from "../../assets/nikeFootball.jpeg";
import nikeVideo from "../../assets/nikeVideo.webm";

import { useEffect } from 'react';
import {useGSAP} from "@gsap/react";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Classics = () => {

    const {contextSafe} = useGSAP();
    useEffect(() => {
        console.log("Effect is being triggered");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".part-1",
                    start: "50% 50%",
                    end: "150% 50%",
                    markers: true,
                    pin: true,
                    pinSpacing: true,
                    scrub:true,
                }
            })

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
                <div className="part-2">

                </div>

                <div className="moreBenefits">

                </div>

        </>
    );
}

export default Classics;
