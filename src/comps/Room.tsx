/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Room({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/yDdCgcDnWq7y7aCc/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#4b4d52']} />
      <group {...props} dispose={null}>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[1157.48, 2527.86, 3422.95]}
        />
        <mesh
          name="Boolean 3"
          geometry={nodes['Boolean 3'].geometry}
          material={materials['Boolean 3 Material']}
          castShadow
          receiveShadow
          position={[-846, 2194.03, 2037.18]}
        />
        <group name="Exercise Book" position={[-666.4, 370.69, -192.42]}>
          <mesh
            name="Cube 7"
            geometry={nodes['Cube 7'].geometry}
            material={materials['Cube 7 Material']}
            castShadow
            receiveShadow
            position={[-77.84, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube 6"
            geometry={nodes['Cube 6'].geometry}
            material={materials['Cube 6 Material']}
            castShadow
            receiveShadow
            position={[1.07, 2.9, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube 5"
            geometry={nodes['Cube 5'].geometry}
            material={materials['Cube 5 Material']}
            castShadow
            receiveShadow
            position={[0.28, 0.19, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube 4"
            geometry={nodes['Cube 4'].geometry}
            material={materials['Cube 4 Material']}
            castShadow
            receiveShadow
            position={[1.07, -2.9, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Cube Material']}
          castShadow
          receiveShadow
          position={[9.13, 365.58, 134.51]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group name="Mug" position={[-389.18, 408.35, 53.26]} rotation={[0, -0.54, 0]} scale={1.1}>
          <mesh
            name="Mug1"
            geometry={nodes.Mug1.geometry}
            material={materials['Mug1 Material']}
            castShadow
            receiveShadow
            position={[-14.49, 16.67, 0]}
            scale={[2.22, 0.98, 2.22]}
          >
            <mesh
              name="Cube1"
              geometry={nodes.Cube1.geometry}
              material={materials.Mug}
              castShadow
              receiveShadow
              position={[28.17, -5.89, 0]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={[0.45, 0.45, 1.02]}
            />
            <mesh
              name="Cube 2"
              geometry={nodes['Cube 2'].geometry}
              material={materials.Mug}
              castShadow
              receiveShadow
              position={[24.33, 8.12, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.45, 0.45, 1.02]}
            />
            <mesh
              name="Cube2"
              geometry={nodes.Cube2.geometry}
              material={materials.Mug}
              castShadow
              receiveShadow
              position={[24.33, -20.01, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.45, 0.45, 1.02]}
            />
          </mesh>
          <mesh
            name="Boolean"
            geometry={nodes.Boolean.geometry}
            material={materials.Mug}
            castShadow
            receiveShadow
            position={[-14.49, 0.17, 0]}
          />
        </group>
        <mesh
          name="Trackpad"
          geometry={nodes.Trackpad.geometry}
          material={materials['Trackpad Material']}
          castShadow
          receiveShadow
          position={[283.83, 376.94, 171.69]}
          rotation={[3.14, 0.11, -Math.PI]}
          scale={[3.4, 0.06, 1.46]}
        />
        <group name="Keyboard" position={[-51.15, 377.39, 168.62]} rotation={[-Math.PI, -0.09, -Math.PI]} scale={0.12}>
          <mesh
            name="Base"
            geometry={nodes.Base.geometry}
            material={materials['Base Material']}
            castShadow
            receiveShadow
            position={[0, -11.38, 0]}
            scale={[28.04, 0.5, 12.01]}
          />
          <mesh
            name="Key 15"
            geometry={nodes['Key 15'].geometry}
            material={materials['Key 15 Material']}
            receiveShadow
            position={[-0.98, 8.71, 1.14]}
            rotation={[-1.59, 0, Math.PI]}
            scale={[1, 1, 0.2]}
          />
        </group>
        <group name="Monitor" position={[0, 613.06, -227.96]} rotation={[0, -Math.PI / 2, 0]} scale={1.4}>
          <group name="Group 2" position={[0, 0.35, 0]}>
            <group name="Group" position={[-7.09, 46.68, 0]} rotation={[0, 0, 0.07]}>
              <mesh
                name="Cube 3"
                geometry={nodes['Cube 3'].geometry}
                material={materials['Cube 3 Material']}
                castShadow
                receiveShadow
                position={[5.8, -124.01, -262.15]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.18, 0.44, 1]}
              />
              <mesh
                name="Cube 41"
                geometry={nodes['Cube 41'].geometry}
                material={materials.MonitorScreen}
                castShadow
                receiveShadow
                position={[4.51, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[16.45, 7.45, 0.38]}
              />
              <mesh
                name="Boolean 2"
                geometry={nodes['Boolean 2'].geometry}
                material={materials['Monitor ']}
                castShadow
                receiveShadow
                position={[8.56, 0, 0]}
              />
            </group>
            <mesh
              name="Cube 21"
              geometry={nodes['Cube 21'].geometry}
              material={materials['Monitor ']}
              castShadow
              receiveShadow
              position={[-34.69, 49.27, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.38, 0.49, 1]}
            />
            <mesh
              name="Boolean1"
              geometry={nodes.Boolean1.geometry}
              material={materials['Monitor ']}
              castShadow
              receiveShadow
              position={[-53, -16.14, 0]}
              rotation={[0, 0, -0.01]}
            />
            <mesh
              name="Cube3"
              geometry={nodes.Cube3.geometry}
              material={materials['Monitor ']}
              castShadow
              receiveShadow
              position={[0, -169.32, 0]}
              scale={[1, 0.06, 1]}
            />
          </group>
        </group>
        <group name="Desk" position={[0, 0, -2]} scale={0.01}>
          <mesh
            name="Cube4"
            geometry={nodes.Cube4.geometry}
            material={materials.DeskTop}
            castShadow
            receiveShadow
            position={[9.3, 34340.1, -3.98]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Merged Geometry 2"
            geometry={nodes['Merged Geometry 2'].geometry}
            material={materials['Desk Metal']}
            castShadow
            receiveShadow
            position={[75098.3, -2747.11, 0]}
          />
          <mesh
            name="Merged Geometry"
            geometry={nodes['Merged Geometry'].geometry}
            material={materials['Desk Metal']}
            castShadow
            receiveShadow
            position={[-75098.3, -2747.11, 0]}
          />
        </group>
        <OrthographicCamera
          name="Personal Camera"
          makeDefault={true}
          zoom={0.4}
          far={100000}
          near={-100000}
          position={[-82.71, 843.76, 460.67]}
          rotation={[-0.43, 0.03, 0.01]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" position={[0, 1, 0]} />
      </group>
    </>
  )
}

