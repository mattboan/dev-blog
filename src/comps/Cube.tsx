import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"


// Basic three js cube component
export const Cube = () => {
    return <>
        <CanvasWrapper />  
    </>
};  

const CanvasWrapper = () => {
    return <Canvas>
        <ambientLight />
        <pointLight />
        <CubeInner />
    </Canvas>
}

const CubeInner = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    
    useFrame((state, delta) => {
        if (!ref?.current) return;
        ref.current.rotation.x += 0.01 
        ref.current.rotation.y += 0.01 }
    );

    return (
    <mesh
    {...props}
    ref={ref}>
        <boxGeometry args={[1,1,1]} />
        <meshStandardMaterial color={"orange"} opacity={1} />
    </mesh>)
}
