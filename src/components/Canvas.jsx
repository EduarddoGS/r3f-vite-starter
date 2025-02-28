import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";
import Navbar from "./navbar"
import '../index.css'

function CanvasP() {
  return (
    <>
    <Navbar />

    <div className="Canvas-container">
      <h1>Elige tu espacio</h1>
      <div>
    <Canvas style={{ width: "70vw", height: "65vh" }} shadows camera={{ position: [-40, 15, 0], fov: 35 }}>
      <color attach="background" args={["#dbecfb"]} />
      <fog attach="fog" args={["#dbecfb,30,40"]} />
      <Suspense>
        <Physics debug>
        <Experience />
        </Physics>
      </Suspense>
    </Canvas>
    </div>
    </div>
    </>
  );
}

export default CanvasP;
