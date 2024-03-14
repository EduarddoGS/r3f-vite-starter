
import {
    Cylinder,
    MeshReflectorMaterial,
    OrbitControls,
    ScrollControls,
  } from "@react-three/drei";
  import { CylinderCollider, RigidBody } from "@react-three/rapier";
  import { Plane, Box } from "@react-three/drei";

  import { useThree } from "@react-three/fiber";
  import { Building } from "./Models/Building";
  import { useNavigate } from 'react-router-dom';
   
 
  
  
  export const ExperienceBuilding = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/home");
        console.log("si se pico esta madre")
    };

    return (
      <>
        <OrbitControls />
        {/*LIGHTS */}
        <ambientLight intensity={1} />
        <directionalLight position={[5,5,5]} intensity={0.8} castShadow color={"#9e69da"} />
  
        {/* Floor */}
       
       <group>
        <RigidBody colliders={false} type="fixed" position={[0,-2.5, 0]}>
          <Box args={[30, 0.3, 30]} receiveShadow>
            <meshStandardMaterial color="#e0e0e0" />
          </Box>
        </RigidBody>
     
        </group>
  
        <mesh position={[0, -2.34, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[30, 30]} />
          <MeshReflectorMaterial
            blur={[400, 400]}
            resolution={1024}
            mixBlur={1}
            mixStrength={15}
            depthScale={1}
            minDepthThreshold={0.85}
            color="#e0e0e0"
            metalness={0.15}
            roughness={0.8}
          />
        </mesh>
        
        {/*Edificio */}
        <mesh onClick={handleClick}>
        
        
        <Building scale={[8,8,8]} position={[0,-1.6,0]} rotation={[0,20.4,0]}/>
        
        
        </mesh>
      </>
    );
  };