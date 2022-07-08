import * as THREE from "three";
import { Float, Sphere, useGLTF } from "@react-three/drei";
import { useFrame, useThree, Vector3 } from "@react-three/fiber";
import { useEffect, useMemo, useState } from "react";
import { Depth, Fresnel, LayerMaterial, Noise } from "lamina/vanilla";

// Location of the floppy drive
const FLOPPY_DRIVE_LOCATION = "/models/floppy_drive.gltf";

const colorA = new THREE.Color("#2032A5").convertSRGBToLinear();
const colorB = new THREE.Color("#0F1C4D").convertSRGBToLinear();
const fresnel = new THREE.Color("#E7B473").convertSRGBToLinear();
const material = new LayerMaterial({
    layers: [
        new Depth({
            colorA: colorA,
            colorB: colorB,
            alpha: 0.5,
            mode: "normal",
            near: 0,
            far: 2,
            origin: [1, 1, 1],
        }),
        new Depth({
            colorA: "purple",
            colorB: colorB,
            alpha: 0.5,
            mode: "add",
            near: 3,
            far: 2,
            origin: [1, 1, 1],
        }),
        new Fresnel({
            mode: "add",
            color: fresnel,
            intensity: 0.3,
            power: 2.5,
            bias: 0.0,
        }),
        new Noise({
            mapping: "local",
            type: "simplex",
            scale: 1000,
            colorA: "#ffaf40",
            colorB: "black",
            mode: "overlay",
        }),
    ],
});

const positions = [
    [0, 0, 0],
    [30, 30, 30],
];

const material2 = new THREE.MeshStandardMaterial({
    color: 0xff5200,
    transparent: false,
    opacity: 1,
});

export interface Props {
    key: number;
}

// Create one floppy drive
export const FloppyDrive = (props: Props) => {
    const { viewport, camera } = useThree();
    const { nodes } = useGLTF(FLOPPY_DRIVE_LOCATION) as any;

    console.log("Got the nodes: ", nodes["Disk"].geometry);
    const [disk, setDisk] = useState();
    const [geometry, setGem] = useState(null!);

    // The position of the floppy drive
    const position = useMemo(() => {
        // const z = Math.random() * -5;
        const z = -300;
        const bounds = viewport.getCurrentViewport(camera, [0, 0, z]);

        console.log("Got the bounds", bounds);
        return [
            THREE.MathUtils.randFloatSpread(bounds.width),
            THREE.MathUtils.randFloatSpread(bounds.height),
            z,
        ];
    }, [viewport]);

    useEffect(() => {
        if (nodes) {
            setGem(nodes["Slider"].geometry);
            setDisk(nodes["Disk"].geometry);
        }
    }, [nodes]);

    useEffect(() => {
        console.log("Got the gem: ", geometry);
    }, [geometry]);

    // Render the component
    return (
        <Float
            position={position as any}
            speed={0.2}
            rotationIntensity={100}
            floatIntensity={100}
            dispose={null}
            scale={0.5}
        >
            <group scale={0.1}>
                <mesh
                    geometry={disk}
                    material={material2}
                    scale={[9, 0.5, 9.3]}
                />
                <mesh geometry={geometry} position={[-1, 0, 299.05]} />
            </group>
        </Float>
    );
};

// Export a group of floppy drives
export const Flops = () => (
    <>
        {Array.from({ length: 8 }, (_, i) => (
            <FloppyDrive key={i} />
        ))}
    </>
);

export const BG = () => {
    return (
        <mesh scale={100} material={material}>
            <boxGeometry args={[1, 1, 1]} />
        </mesh>
    );
};

export function Rig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
        state.camera.position.lerp(
            v.set(state.mouse.x + 2, state.mouse.y / 100, 1),
            0.05
        );
    });
}

useGLTF.preload("/models/floppy_drive.gtlf");
