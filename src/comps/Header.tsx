import "../css/header.css";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { motion } from "framer-motion";
import {KEY_CODES, useEventListener} from "../hooks/EventListener";

/**
 * Header component
 */
export const Header = () => {
    const [open, setOpen] = useState(false);

    /** Listen for the escpae key and menu key */
    useEventListener("keydown", ({key}: {key: any}) => {
        if (KEY_CODES.escape.includes(String(key)) && open) setOpen(false); 
        if (KEY_CODES.m.includes(String(key))) setOpen(!open); 
    });

    /** Watch the open variable */
    useEffect(() => {
        if (open) {
           // Scroll to the top TODO: instead of scrolling to the top of the page, move the header to the top of the body window
           window.scrollTo(0, 0);
        }

        document.body.style.overflow = open ? "hidden" : "unset";
    }, [open]);

    return (
        <>
            {open && <Menu open={() => setOpen(false)} />}
            <div className="header">
                <div className="header-left">
                    <button
                        className="menu-btn"
                        onClick={() => !open && setOpen(!open)}
                        style={{
                            opacity: `${open ? "0%" : "100%"}`,
                        }}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <motion.div
                        animate={open ? "open" : "closed"}
                        variants={variants}
                    >
                        <h1>mattboan</h1>
                    </motion.div>
                </div>

                <button
                    className="menu-btn"
                    onClick={() => open && setOpen(!open)}
                    style={{
                        opacity: `${open ? "100%" : "0%"}`,
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </>
    );
};

const variants = {
    open: { x: "-40px" },
    closed: { x: 0 },
};
