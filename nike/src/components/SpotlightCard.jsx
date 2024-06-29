
import "./componentStyles.css";

const SpotlightCard = ({name, image, bgColor, nameColor}) => {
    return ( 
        <>
             <div className="card-container" style={{
                    backgroundColor: bgColor,  
                }}>
                <div className="shadowShoes"></div>
            <div className="card-Name">
                <h1 style={{color: nameColor}}>{name}</h1>
            </div>
                <img className="spotlight-images" src={image} alt={name} />
        </div>
        </>
     );
}
 
export default SpotlightCard;