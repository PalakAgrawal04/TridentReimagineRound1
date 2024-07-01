import { Link } from "react-router-dom";
import "./componentStyles.css";
const FooterLinks = ({linkName, allLink}) => {
    return ( 
        <>
            <div className="foot-links">
                <div className="headerLink">
                    <h1 className="heading-links">{linkName}</h1>
                </div>
                <div className="all-links">
                    {
                        allLink.map((item) => {
                            return(
                                <>
                                    <h1 className="mainLinks">{item.linkMain}</h1>
                                </>
                            );
                        })
                    }a
                </div>
            </div>
        </>
     );
}
 
export default FooterLinks;