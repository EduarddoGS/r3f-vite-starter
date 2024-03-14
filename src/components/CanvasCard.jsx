import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";
import Navbar from "./navbar"
import '../index.css'

function CanvasCard() {
  return (
    <>
    <div>
    <Canvas style={{ width: "310px", height: "200px" }} shadows camera={{ position: [-40, 15, 0], fov: 35 }}>
      <color attach="background" args={["#ffffff"]} />
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

export default CanvasCard;
