import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";
import Navbar from "./components/navbar"
import CanvasP from "./components/Canvas";
import './index.css'

function App() {
  return (
    <>
   <Navbar />
   <CanvasP />
    </>
  );
}

export default App;
