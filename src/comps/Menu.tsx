import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/menu.css";

export interface Props {
    open(): void;
}

/**
 * Menu Component
 */
export const Menu = (props: Props) => {
    return <div className="menu-con">
         <button className="menu-btn" onClick={() => props.open()}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
        <h1>Menu</h1>
        <p>Home</p>
    </div>
}