import { useEffect } from "react";
import gsap from "gsap";
import "./footerStyles.css";
import FooterLinks from "../components/FooterLinks";
import nikeWhite from "../assets/nikeWhiteLogo.png";
// import nikeBlack from "../assets/NikeLogoMain copy.png";
const Footer = () => {

    const footerArr = [
        {
            id:1,
            linkName:"Resources",
            allLinks:[
                {
                    linkMain:"Find A Store"
                },
                {
                    linkMain:"Become a member "
                },
                {
                    linkMain:"Send us Feedback"
                }
            ]
        },
        {
            id:2,
            linkName:"Help",
            allLinks:[
                {
                    linkMain:"Get Help"
                },
                {
                    linkMain:"Order Status"
                },
                {
                    linkMain:"Delivery"
                },
                {
                    linkMain:"Returns"
                },
                {
                    linkMain:"Payment Options"
                },
            ]
        },
        {
            id:3,
            linkName:"Company",
            allLinks:[
                {
                    linkMain:"About Nike"
                },
                {
                    linkMain:"News"
                },
                {
                    linkMain:"Carrers"
                }
            ]
        }
    ];

    useEffect(() => {
        // gsap.to(".logo", {src: nikeBlack});

        // gsap.from(".footer-content", {
        //     y:"-600px",
        //     opacity:0,
        //     scrollTrigger: {
        //         trigger:".footer-main",
        //         start:"0% 50%",
        //         end:"20% 50%",
        //         duration:1,
        //         // markers: true,
        //         scrub: true,
        //     }
        // });
    },[])
    return ( 
        <>
            <div className="footer-main">
                <div className="footer-content">
                        <h1 className="copyRights">© 2024 Nike, Inc. All rights reserved</h1>
                    <div className="foot-left">
                        <img className="nikeFooterLogo" src={nikeWhite} alt="" />
                    </div>
                    <div className="foot-right">
                        {
                            footerArr.map((foot) => {
                                return(
                                    <>
                                        <FooterLinks key={foot.id} linkName={foot.linkName} allLink={foot.allLinks}/>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
     );x
}
 
export default Footer;