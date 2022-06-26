import "../css/hero.css"
import { Cube } from "./Cube";
import  { SceneWrapper } from "./Scene";

/**
 * Hero component
 */
export const Hero = () => {
    return <div className="major-con">
        <div className="hero-con">
            <div className="hero-img-temp" style={{ backgroundImage: "url('/img/3d-env.png')" }}>
            </div>
            {/* <Cube /> */}
            <SceneWrapper />
        </div>
    </div>
};
