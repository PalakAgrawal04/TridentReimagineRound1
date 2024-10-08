import "./newArrivalsStyles.css";
import pegasus41 from "../PagesAssets/nikePegasus41.png";
import precision7 from "../PagesAssets/Precision7.png";
import airMax270 from "../PagesAssets/airMax270Shoes.png";
import greenNike from "../PagesAssets/greenPegasus41.png";

import NewShoesCard from "../../components/NewShoesCard";
import { useEffect } from "react";
import gsap from "gsap";

const NewArrvials = () => {

    const newArr = [
        {
            id:1,
            name:"Air Max 270",
            nameColor: "black",
            number:"270",
            numColor: "#79D700",
            shoeImg : airMax270,
            cardColor:"#B3FF67"
        },
        {
            id:2,
            name:"Pegasus 41",
            nameColor: "black",
            number:"41",
            numColor: "#00D7CB",
            shoeImg : pegasus41,
            cardColor:"#00FFF0"
        },
        {
            id:3,
            name:"Precision 7",
            nameColor: "white",
            number:"7",
            numColor: "#670000",
            shoeImg : precision7,
            cardColor:"#A40000"
        },
        // {
        //     id:1,
        //     name:"Air Max 270",
        //     nameColor: "black",
        //     number:"270",
        //     numColor: "#79D700",
        //     shoeImg : greenNike,
        //     cardColor:"#B3FF67"
        // },
    ];

    useEffect(() => {
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".mainContainer",
                start: "20% 50%",
                end: "50% 50%",
            }
        })
        t1.from(".titleNew h1", {
            y:"100px",
            duration:0.5,
        })
        .from(".scrollCards", {
            stagger:0.2,
            duration:0.3,
            opacity:0,
            y:"50px"
        })

        
    },[]);
    return ( 
        <>
            <div className="mainContainer">
                <div className="titleNew">
                    <h1>New Arrivals</h1>
                </div>
                <div className="newArrivals-content">
                    <div className="scrollCards">
                        {
                            newArr.map((item) => {
                                return(
                                    <>
                                        <NewShoesCard key={item.id} name={item.name} nameColor={item.nameColor} image={item.shoeImg} num={item.number} numColor={item.numColor} cardColor={item.cardColor}/>
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
 
export default NewArrvials;