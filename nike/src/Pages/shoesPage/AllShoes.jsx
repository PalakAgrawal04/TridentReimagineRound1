import pegasus41 from "../../assets/nikePegasus41.png";
import greenPegasus from "./ShoesAssets/greenPegasus41.png";
import jordan2 from "./ShoesAssets/jordan2.png";
import Jordan3 from "./ShoesAssets/Jordan3.png";
import Jordan4 from "./ShoesAssets/Jordan4.png";
import MaxDN from "./ShoesAssets/MaxDN.png";
import precision7 from "./ShoesAssets/Precision7.png";
import PluseRoam from "./ShoesAssets/PluseRoam.png";
import RunPink from "./ShoesAssets/RunPink.png";


import ShoeCard from "../../components/ShoeCard";
import "./ShoesPageStyles.css";

const AllShoes = () => {

    const shoes = [
        {
            id:1,
            image: pegasus41,
            name: "Pegasus 41",
        },
        {
            id:2,
            image: greenPegasus,
            name: " Green Pegasus 41",
        },
        {
            id:3,
            image: jordan2,
            name: "Jordan Mid",
        },
        {
            id:4,
            image: Jordan3,
            name: "Jordan Mid",
        },
        {
            id:5,
            image: Jordan4,
            name: "Air Jordan Low",
        },
        {
            id:6,
            image: MaxDN,
            name: "Air Max DN",
        },
        {
            id:7,
            image: precision7,
            name: "Precision 7",
        },
        {
            id:8,
            image: PluseRoam,
            name: "Pluse Roam",
        },
        {
            id:9,
            image: precision7,
            name: "Precision 7",
        },
        

    ];

    return ( 
        <>
            <div className="container">
                <div className="row1">
                    {
                        shoes.slice(0,3).map((shoe) => {
                            return(
                                <>
                                    <ShoeCard shoePic={shoe.image} shoeName={shoe.name}/>
                                </>
                            );
                        })
                    }
                </div>
                <div className="row2">
                    {
                        shoes.slice(3,6).map((shoe) => {
                            return(
                                <>
                                    <ShoeCard shoePic={shoe.image} shoeName={shoe.name}/>
                                </>
                            );
                        })
                    }
                </div>
                <div className="row3">
                    {
                        shoes.slice(6,10).map((shoe) => {
                            return(
                                <>
                                    <ShoeCard shoePic={shoe.image} shoeName={shoe.name}/>
                                </>
                            );
                        })
                    }
                </div>
            </div>
        </>
     );
}
 
export default AllShoes;