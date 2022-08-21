import { useRef } from "react";
import "../css/hero.css";
import { SceneWrapper } from "./Scene";

const avatar = "https://avatars.githubusercontent.com/u/29358494?v=4";

export const Hero = () => {
    const domContent = useRef<any>(null!);

    return (
        <div className="hero-con">
            <div className="hero-img-temp" style={{ backgroundImage: "url('/img/3d-env.png')" }}></div>
            <SceneWrapper />
            <div className="hero-inner-wrapper-con">
                <div className="hero-inner-con">
                    <div
                        className="hero-avatar"
                        style={{
                            backgroundImage: `url("${avatar}")`,
                        }}
                    />
                    <div className="hero-text-box">
                        <h1 id="hero-big">@mattboan</h1>
                        <h1>Code | Design | Create</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
