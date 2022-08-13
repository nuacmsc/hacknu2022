import { Canvas, ReactThreeFiber, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PlanetModel from './3D/Planetdemo'
import { useRef, useState } from "react";
import * as THREE from 'three'

//TODO: Make it work with classNames
export default function Planet() {

  return (
    <Canvas
         camera={{ position: [2, 0, 1.5], fov: 90 }}
         style={{
            width: '500px',
            height: '500px',
         }}
      >
         <ambientLight intensity={0.3} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.3} />
          <PlanetModel/>
         <OrbitControls />
      </Canvas>
  )
}
