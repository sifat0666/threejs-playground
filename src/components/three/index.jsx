import React from "react";
import { angleToRadians } from "../../utils";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const Three = () => {
  const orbitControlRef = useRef(null);
  useFrame((state) => {
    // const {x, y} = state.mouse
  });

  useEffect(() => {
    if (!!orbitControlRef.current) {
      console.log(orbitControlRef.current);
    }
  }, [orbitControlRef.current]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 7]} />
      <OrbitControls ref={orbitControlRef} />
      <mesh position={[0, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[7, 7]} />
        <meshPhongMaterial color="green" />
      </mesh>

      <ambientLight args={["#ffffff", 0.2]} />

      <spotLight args={["#ffffff", 1]} position={[-4, 1, 0]} castShadow />

      {/* <Environment background>
        <sphereGeometry args={[50, 100, 100]} />
        <meshBasicMaterial color="red" side={THREE.BackSide} />
      </Environment> */}
    </>
  );
};

export default Three;
