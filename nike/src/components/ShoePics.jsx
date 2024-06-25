
import "./componentStyles.css"

const ShoePics = ({pics}) => {
    return ( 
        <>
            <div className="picContainer">
                <img className="picture" src={pics} alt="" />
            </div>
        </>
     );
}
 
export default ShoePics;