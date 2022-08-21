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
    return (
        <div className="menu-con">
            <div className="menu-inner-con">
                <a href="/">Home</a>
            </div>
        </div>
    );
};
