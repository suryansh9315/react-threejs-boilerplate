import './App.css';
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import Floor from "./components/Floor";
import LightBulb from "./components/LightBulb";
import OrbitControls from "./components/OrbitControls";
import Draggable from "./components/Draggable";
import { Suspense } from "react";
import Box2 from "./components/Box2";

export default function App() {
  return (
    <div className='container'>
      <p className="heading">Nextjs-Three.js Boilerplate</p>
      <Canvas shadows={true} className='canvas' camera={{position: [-6, 7, 7],}} style={{height:500,width:500}}>
        <ambientLight color='white' intensity={0.3}/>
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Suspense>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        </Draggable>
        <Suspense>
          <Box2 position={[2, 0, 2]} />
        </Suspense>
        <OrbitControls />
        <Floor position={[0, -5, 0]} />
      </Canvas>
    </div>
  );
}
