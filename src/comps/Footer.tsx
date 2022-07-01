import {faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../css/footer.css";

/** 
 * Footer component
 */
export const Footer = () => {

    return <div className="footer-con">
        <div className="footer-inner-con">
            <div className="footer-row">
                <h3>Links</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-text">&copy; 2022 Matt Boan</div>
        </div>
    </div>

};
