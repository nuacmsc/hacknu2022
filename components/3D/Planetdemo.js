/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from "three"


//TODO: Change URL for live-url on production. 
// const URL = "http://localhost:3000/models/planet.glb";
const URL = "https://tubular-sunburst-06da0f.netlify.app/models/planet.glb";


export default function PlanetModel(props) {
  const { nodes, materials } = useGLTF(URL)
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere_1.geometry} material={materials.PlanetMat} />
      <mesh geometry={nodes.Sphere_2.geometry} material={materials['Material.005']} rotation-x={0.2}/>
    </group>
  )
}

useGLTF.preload(URL)
