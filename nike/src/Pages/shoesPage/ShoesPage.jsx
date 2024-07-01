import "./ShoesPageStyles.css";
import { CiFilter } from "react-icons/ci";
import AllShoes from "./AllShoes";
import FilterDrop from "./FilterDrop";
import { useEffect } from "react";
import gsap from "gsap";
import nikeBlack from "../PagesAssets/NikeLogoMain.png";
import { ScrollTrigger } from "gsap/all";
const ShoesPage = () => {

    const filterArr=[
        {
            name:"Gender",
            options:[
                {
                    op:"Male"
                },
                {
                    op:"Female"
                },
            ]
        },
        {
            name:"Shop By Price",
            options:[
                {
                    op:"5000"
                },
                {
                    op:"7000"
                },
                {
                    op:"10000"
                },
            ]
        },
        {
            name:"Sales and Offer",
            options:[
                {
                    op:"25% off"
                },
                {
                    op:"50% off"
                },
                {
                    op:"75% off"
                },
            ]
        },
        {
            name:"Size",
            options:[
                {
                    op:"7 UK"
                },
                {
                    op:"8 UK"
                },
                {
                    op:"9 UK"
                },
                {
                    op:"10 UK"
                },
            ]
        },
        {
            name:"Color",
            options:[
                {
                    op:"Red"
                },
                {
                    op:"White"
                },
                {
                    op:"Blue"
                },
                {
                    op:"Black"
                },
            ]
        },
        {
            name:"Collections",
            options:[
                {
                    op:"Jordans"
                },
                {
                    op:"Dunks"
                },
                {
                    op:"Air Force 1"
                },
                {
                    op:"Air Max"
                },
            ]
        },
    ];

    gsap.registerPlugin(ScrollTrigger);


    useEffect(() => {

        const changeImageSrc = (selector, newSrc) => {
            const imgElement = document.querySelector(selector);
            if (imgElement) {
                imgElement.src = newSrc;
            }
        };

        ScrollTrigger.matchMedia({
            // Desktop
            "(min-width: 651px)": function() {
                changeImageSrc(".nav-left img", nikeBlack);
                gsap.to(".footer-main", { backgroundColor: "#F4F4F4" });
                gsap.to(".footer-content", { backgroundColor: "#FFF" });
                gsap.to(".heading-links", { color: "#000" });
                gsap.to(".mainLinks", { color: "#000" });
                gsap.to(".copyRigths", { color: "#3b3b3b" });
                gsap.to(".nav-right a", { color: "#000" });
                changeImageSrc(".nikeFooterLogo", nikeBlack);
            },
            // Mobile
            "(max-width: 650px)": function() {
                
                changeImageSrc(".nav-left img", nikeBlack);
                gsap.to(".footer-main", { backgroundColor: "#F4F4F4" });
                gsap.to(".footer-content", { backgroundColor: "#FFF" });
                gsap.to(".heading-links", { color: "#000" });
                gsap.to(".mainLinks", { color: "#000" });
                gsap.to(".copyRigths", { color: "#3b3b3b" });
                changeImageSrc(".foot-left img", nikeBlack);
            }
        });

        
    },[]);
    return ( 
        <>
            <div className="mainPage">
                <div className="shoePage">
                    <div className="filters">
                        <div className="filterTag">
                            <CiFilter size={25}/>
                            <h1>Filters</h1>
                        </div>
                        <div className="allFilters">
                            {
                                filterArr.map((filters) => {
                                    return(
                                        <>
                                            <FilterDrop filterName={filters.name} fitlerOptions={filters.options}/>
                                        </>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="shoes">
                        <AllShoes/>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ShoesPage;