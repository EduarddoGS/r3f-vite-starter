import { Canvas } from "@react-three/fiber";
import { ExperienceBuilding } from "./ExperiencieBuilding";
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";
import Navbar from "./navbar"
import '../index.css'

function CanvasBuilding() {
  return (
    <>
    <Navbar />
    <div className="Canvas-container-building">
        <h1>Comienza tu reserva</h1>
    <div className="">
   
    <Canvas style={{ width: "70vw", height: "70vh" }} shadows camera={{ position: [-40, 15, 0], fov: 35 }}>
      <color attach="background" args={["#dbecfb"]} />
      <fog attach="fog" args={["#dbecfb,30,40"]} />
      <Suspense>
        <Physics debug>
        <ExperienceBuilding />
        </Physics>
      </Suspense>
    </Canvas>
    </div>
    </div>
    </>
  );
}

export default CanvasBuilding;