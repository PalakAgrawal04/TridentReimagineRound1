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
import { useState, useEffect } from "react";

const AllShoes = () => {
    const [widthSize, setWidthSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidthSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const shoes = [
        { id: 1, image: pegasus41, name: "Pegasus 41" },
        { id: 2, image: greenPegasus, name: "Green Pegasus 41" },
        { id: 3, image: jordan2, name: "Jordan Mid" },
        { id: 4, image: Jordan3, name: "Jordan Mid" },
        { id: 5, image: Jordan4, name: "Air Jordan Low" },
        { id: 6, image: MaxDN, name: "Air Max DN" },
        { id: 7, image: precision7, name: "Precision 7" },
        { id: 8, image: PluseRoam, name: "Pluse Roam" },
        { id: 9, image: precision7, name: "Run Pink" },
    ];

    const shoesResponsive = [
        { id: 1, image: pegasus41, name: "Pegasus 41" },
        { id: 2, image: greenPegasus, name: "Green Pegasus 41" },
        { id: 3, image: jordan2, name: "Jordan Mid" },
        { id: 4, image: Jordan3, name: "Jordan Mid" },
        { id: 5, image: Jordan4, name: "Air Jordan Low" },
        { id: 6, image: MaxDN, name: "Air Max DN" },
        { id: 7, image: precision7, name: "Precision 7" },
        { id: 8, image: PluseRoam, name: "Pluse Roam" },
        { id: 9, image: precision7, name: "Run Pink" },

        { id: 10, image: precision7, name: "Run Pink" },
        { id: 11, image: precision7, name: "Run Pink" },
        { id: 12, image: precision7, name: "Run Pink" },
        { id: 13, image: precision7, name: "Run Pink" },
        { id: 14, image: precision7, name: "Run Pink" },
        { id: 15, image: precision7, name: "Run Pink" },

    ];

    const renderShoeCards = (shoeArray) => {
        return shoeArray.map((shoe) => (
            <ShoeCard key={shoe.id} shoePic={shoe.image} shoeName={shoe.name} />
        ));
    };

    return (
        <div className="container">
            <div className="row1">
                {widthSize > 650 ? renderShoeCards(shoes.slice(0, 3)) : renderShoeCards(shoesResponsive.slice(0, 2))}
            </div>
            <div className="row2">
                {widthSize > 650 ? renderShoeCards(shoes.slice(3, 6)) : renderShoeCards(shoesResponsive.slice(2, 4))}
            </div>
            <div className="row3">
                {widthSize > 650 ? renderShoeCards(shoes.slice(6, 9)) : renderShoeCards(shoesResponsive.slice(4, 6))}
            </div>
            <div className="row4">
                {widthSize > 650 ? renderShoeCards(shoes.slice(6, 9)) : renderShoeCards(shoesResponsive.slice(6, 8))}
            </div>
            <div className="row5">
                {widthSize > 650 ? renderShoeCards(shoes.slice(6, 9)) : renderShoeCards(shoesResponsive.slice(4, 6))}
            </div>
            <div className="row6">
                {widthSize > 650 ? renderShoeCards(shoes.slice(6, 9)) : renderShoeCards(shoesResponsive.slice(4, 6))}
            </div>
        </div>
    );
};

export default AllShoes;
