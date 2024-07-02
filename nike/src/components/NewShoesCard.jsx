import { Link } from "react-router-dom";
import "./componentStyles.css";

const NewShoesCard = ({name, nameColor,num, numColor, image, cardColor}) => {
    return ( 
        <>
            <div className="newCardMain" style={{
                backgroundColor: cardColor
            }}>
                <img className="shoesImg" src={image} alt="" />
                <h1 className="number" style={{color:numColor}}>{num}</h1>

                <div className="newDesc">
                    <h1 className="newName" style={{color:nameColor}}>{name}</h1>
                    <Link to="/shoes" className="buyNowBtn">Buy Now</Link>
                </div>

            </div>
        </>
     );
}
 
export default NewShoesCard;