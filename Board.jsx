/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/board.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/board.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Wall_corkboard_with_post_it_notes.geometry} material={materials.Material} scale={100} />
    </group>
  )
}

useGLTF.preload('/board.glb')
