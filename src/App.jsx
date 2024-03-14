import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Suspense} from "react";
import { Physics } from "@react-three/rapier";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CanvasP from "./components/Canvas";
import CanvasBuilding from "./components/CanvasBuilding";
import Reservas from "./components/reservas"
import './index.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<CanvasBuilding/>} />
        <Route path="/home" element={<CanvasP />} />
        <Route path="/about" element={<Reservas />} />
      </Routes>
    </Router>
   
    </>
  );
}

export default App;
