import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import PopUp from "./Popup1";
import { Robot } from "./Models/Robot";

const MovingSquare = () => {
  const ref = useRef();
  const [position, setPosition] = useState([0, -.9, 0]);
  const [showPopup, setShowPopup] = useState(false);
  useFrame(() => {
    ref.current.position.set(...position);
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      const speed = 0.22  ;
      switch (event.key) {
        case "ArrowUp":
          setPosition((prev) => [prev[0] + speed, prev[1], prev[2]]);
          break;
        case "ArrowDown":
          setPosition((prev) => [prev[0] - speed, prev[1], prev[2]]);
          break;
        case "ArrowLeft":
          setPosition((prev) => [prev[0], prev[1], prev[2] - speed]);
          break;
        case "ArrowRight":
          setPosition((prev) => [prev[0], prev[1], prev[2] + speed]);
          break;
        case "Enter":
            setShowPopup(true);
            console.log("hola");
            break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
    <mesh ref={ref} position={position}>
      <Robot scale={[3,3,3]} />
      
    </mesh>
    <PopUp
    position={[0, 0, 0]}
    visible={showPopup}
    onClose={() => setShowPopup(false)}
  />
  </>
  );
};

export default MovingSquare;


