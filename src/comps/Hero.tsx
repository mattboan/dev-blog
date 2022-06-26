import "../css/hero.css"
import { Cube } from "./Cube";

/**
 * Hero component
 */
export const Hero = () => {
    return <div className="major-con">
        <div className="hero-con">
            <div className="hero-img-temp" style={{ backgroundImage: "url('/img/3d-env.png')" }}>
            </div>
            <Cube />
        </div>
    </div>
};
