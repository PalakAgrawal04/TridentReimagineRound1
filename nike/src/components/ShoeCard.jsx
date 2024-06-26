import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import "./componentStyles.css";
const ShoeCard = ({shoePic, shoeName}) => {
    return ( 
        <>
            <div className="card">
                <div className="shoeMain">
                    <div className="shadows"></div>
                    <img className="shoeImage" src={shoePic} alt="" />
                </div>
                <div className="desc">
                    <div className="nameShoes">
                        <h1 className="naming">{shoeName}</h1>
                        <h2 className="typeShoes">Men's Shoes</h2>
                    </div>
                    <div className="ShoesDesc">
                        <div className="priceShoes">
                            <h1 className="priceMRP">MRP: $1,000</h1>
                        </div>
                        <div className="addOptions">
                            <IoCartOutline size={25} />
                            <FaRegHeart size={20} />
                        </div>
                    </div>

                </div>
            </div>
        </>
     );
}
 
export default ShoeCard;