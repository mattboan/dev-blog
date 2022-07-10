import { Canvas } from "@react-three/fiber";
import Balls from "./Balls";

export const SceneWrapper = () => {
    return (
        <div className="scene-wrapper">
            <Canvas camera={{ position: [0, 0, 831], fov: 40 }}>
                    <pointLight
                        castShadow
                        intensity={0.7}
                        position={[0, 0, 0]}
                    />
                    <Balls />
            </Canvas>
        </div>
    );
};