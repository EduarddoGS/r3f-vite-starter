import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";
import '../index.css'

function CanvasP() {
  return (
    <>
    <div className="Canvas-container">
    <Canvas style={{ width: "70vw", height: "70vh" }} shadows camera={{ position: [-40, 15, 0], fov: 35 }}>
      <color attach="background" args={["#dbecfb"]} />
      <fog attach="fog" args={["#dbecfb,30,40"]} />
      <Suspense>
        <Physics debug>
        <Experience />
        </Physics>
      </Suspense>
    </Canvas>
    </div>
    </>
  );
}

export default CanvasP;
