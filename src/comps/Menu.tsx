import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/menu.css";

export interface Props {
    open(): void;
}

/**
 * Menu Component
 * 
 * TODO: Make the header z-index on top, then when the menu is open,
 *      hide the bars button, slide the mattboan to the side
 */
export const Menu = (props: Props) => {
    return <div className="menu-con">
        <div className="menu-header">
        <h1>menu</h1>

         <button className="menu-btn" onClick={() => props.open()}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
        </div>

        <p>Home</p>
    </div>
}