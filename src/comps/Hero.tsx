import { Html } from "@react-three/drei";
import { useRef } from "react";
import "../css/hero.css";
import { Cube } from "./Cube";
import { SceneWrapper } from "./Scene";

/**
 * Hero component
 */
export const Hero = () => {
    const domContent = useRef<any>(null!);

    return (
        <div className="hero-con">
            <div
                className="hero-img-temp"
                style={{ backgroundImage: "url('/img/3d-env.png')" }}
            ></div>
            {/* <Cube /> */}
            <SceneWrapper />
            <div className="hero-text-box">
                <h1>Code | Design | Create</h1>
                {/* <h1>Code.</h1>
                <h1>Design.</h1>
                <h1>Create.</h1> */}
            </div>
        </div>
    );
};
