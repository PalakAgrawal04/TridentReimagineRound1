
import { useEffect } from "react";
import "./preLoader.css";
import gsap from "gsap";
const PreLoader = () => {

    useEffect(() => {
        let tl = gsap.timeline()
            tl.to("body", {
              duration: 0.1,
              css: { overflowY: "hidden" },
              ease: "power3.inOut",
            })
            
              .to(".texts-container", {
                duration: 0,
                opacity: 1,
                ease: "Power3.easeOut",
              })
              .from(".texts-container h1", {
                duration: 1.5,
                delay: 1,
                y: 70,
                // skewY: 10,
                stagger: 0.4,
                ease: "Power3.easeOut",
              })
              .to(".texts-container h1", {
                duration: 1,
                y: 70,
                // skewY: -20,
                stagger: 0.2,
                ease: "Power3.easeOut",
              })
              
              
              .to(".preloader", {
                duration:0.8,
                // opacity:0,
                y: "-100vh",
                ease: "power1.inOut",
                // css: { display: "none" },
              })
              .to("body", {
                duration: 0.1,
                css: { overflowY: "scroll" },
                ease: "power3.inOut",
            });
          
    }, []);
    return ( 
        <>
            <div className="preloader">
                <div className="texts-container">
                    <h1>Just</h1>
                    <h1>Do</h1>
                    <h1>It</h1>
                </div>
            </div>
        </>
     );
}
 
export default PreLoader;