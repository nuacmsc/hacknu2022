import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from './Planetdemo'


//TODO: Make it work with classNames
export default function Planet() {
  return (
    <Canvas
         camera={{ position: [2, 0, 12.25], fov: 90 }}
         style={{
            width: '500px',
            height: '500px',
         }}
      >
         <ambientLight intensity={1.25} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
          <Model/>
         <OrbitControls />
      </Canvas>
  )
}
