
import {
  Cylinder,
  MeshReflectorMaterial,
  OrbitControls,
} from "@react-three/drei";
import { CylinderCollider, RigidBody } from "@react-three/rapier";
import { Plane, Box } from "@react-three/drei";
import { Table } from "./Models/Table.jsx";
import { Chair } from "./Models/Chair.jsx";
import { Board } from "./Models/Board.jsx";
import { Desk } from "./Models/Desk.jsx";
import MovingSquare from "./MovingSquare.jsx";
import { useThree } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";




export const Experience = () => {
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

      {/*Espacio 1 */}
      {/* Walls */}
      <RigidBody colliders={false} type="fixed" position={[10, 0, -5]}>
        <Box args={[10, 5, 0.3]} receiveShadow>
          <meshStandardMaterial color="#999999" />
        </Box>
      </RigidBody>

      <RigidBody colliders={false} type="fixed" position={[10, 0, 5]}>
        <Box args={[10, 5, 0.3]} receiveShadow>
          <meshStandardMaterial color="#999999" />
        </Box>
      </RigidBody>

      <RigidBody colliders={false} type="fixed" position={[15, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <Box args={[10, 5, 0.3]} receiveShadow>
          <meshStandardMaterial color="#999999" />
        </Box>
      </RigidBody>

      {/*Table */}
      <Table scale={[3,3,3]} position={[8.5,-1.6,0]}/>
      
      <Board scale={[5,4,3]} position={[9,-1,-4.8] }rotation-y={0} />
      <Board scale={[5,4,3]} position={[9,-1,4.8] }rotation-y={9.4} />
      <Desk scale={[2.3,2.3,2.3]} position={[13,-1.6,2.8]}  rotation-y={1.6}/>
      <Desk scale={[2.3,2.3,2.3]} position={[13,-1.6,-2.8]}  rotation-y={1.6}/>

      {/*Espacio 2 */}
      <RigidBody colliders={false} type="fixed" position={[10, 0, -15]}>
        <Box args={[10, 5, 0.3]} receiveShadow>
          <meshStandardMaterial color="#999999" />
        </Box>
      </RigidBody>

      <RigidBody colliders={false} type="fixed" position={[10, 0, 5]}>
        <Box args={[10, 5, 0.3]} receiveShadow>
          <meshStandardMaterial color="#999999" />
        </Box>
      </RigidBody>

      <RigidBody colliders={false} type="fixed" position={[15, 0, -10]} rotation={[0, Math.PI / 2, 0]}>
        <Box args={[10, 5, 0.3]} receiveShadow>
          <meshStandardMaterial color="#999999" />
        </Box>
      </RigidBody>

      {/*Table */}
      <Table scale={[3,3,3]} position={[8.5,-1.6,-10]}/>
      
      <Board scale={[5,4,3]} position={[9,-1,-14.8] }rotation-y={0} />
      <Board scale={[5,4,3]} position={[9,-1,-5.2] }rotation-y={9.4} />
      <Desk scale={[2.3,2.3,2.3]} position={[13,-1.6,-12.8]}  rotation-y={1.6}/>
      <Desk scale={[2.3,2.3,2.3]} position={[13,-1.6,-7]}  rotation-y={1.6}/>

      {/*Espacio 3 */}
      <group>
      <RigidBody colliders={false} type="fixed" position={[10, 0, 15]}>
        <Box args={[10, 5, 0.3]} receiveShadow>
          <meshStandardMaterial color="#999999" />
        </Box>
      </RigidBody>



      <RigidBody colliders={false} type="fixed" position={[15, 0, 10]} rotation={[0, Math.PI / 2, 0]}>
        <Box args={[10, 5, 0.3]} receiveShadow>
          <meshStandardMaterial color="#999999" />
        </Box>
      </RigidBody>

      {/*Table */}
      <Table scale={[3,3,3]} position={[8.5,-1.6,10]}/>
      
      <Board scale={[5,4,3]} position={[9,-1,14.8] }rotation-y={9.4} />
      <Board scale={[5,4,3]} position={[9,-1,5.2] }rotation-y={0} />
      <Desk scale={[2.3,2.3,2.3]} position={[13,-1.6,12.8]}  rotation-y={1.6}/>
      <Desk scale={[2.3,2.3,2.3]} position={[13,-1.6,7.3]}  rotation-y={1.6}/>
      </group>

      <MovingSquare  scale={[5,5,5]}/>
    </>
  );
};
