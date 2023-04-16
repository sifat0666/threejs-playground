import React from "react";
import { angleToRadians } from "../../utils";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Three = () => {
  const orbitControlRef = useRef(null);
  useFrame((state) => {
    // const {x, y} = state.mouse
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 7]} />
      <OrbitControls />
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <ambientLight args={["#ffffff", 1]} />
    </>
  );
};

export default Three;
