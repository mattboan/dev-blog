import "../css/header.css"
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Menu } from "./Menu";


/**
 * Header component
 */
export const Header = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "unset"
    }, [open]);

    return <>
    { open && <Menu open={() => setOpen(false) }/>}
    <div className="header">
        <button className="menu-btn" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>mattboan</h1>
    </div>
    </>
};
