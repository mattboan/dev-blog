import "../css/header.css"
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


/**
 * Header component
 */
export const Header = () => {
    return <div className="header">
        <button className="menu-btn">
            <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>mattboan</h1>
    </div>
};
