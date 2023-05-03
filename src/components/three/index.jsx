import React from "react";
import { angleToRadians } from "../../utils";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";

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
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      <mesh rotation={[-angleToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <ambientLight args={["#ffffff", 0.1]} />

      <pointLight args={["#ffffff", 1]} position={[-3, 1, 0]} />
    </>
  );
};

export default Three;
