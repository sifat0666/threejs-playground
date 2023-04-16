import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import Three from "./components/three";
// import Three from "./component/three";

function App() {
  return (
    <Canvas id="three-canvas-container">
      <Suspense fallback={<>loading</>}>
        <Three />
      </Suspense>
    </Canvas>
  );
}

export default App;
