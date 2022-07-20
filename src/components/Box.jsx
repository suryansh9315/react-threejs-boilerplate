import React, { useRef, useState } from "react";
import { useLoader,useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Box = (props) => {
  const [clicked, setclicked] = useState(false);
  const texture = useLoader(TextureLoader, "/texture.png");
  const boxMesh = useRef();
  useFrame(({ clock }) => {
    boxMesh.current.rotation.x = clock.getElapsedTime();
  });
  return (
    <mesh
      scale={clicked ? 1.5:1}
      {...props}
      recieveShadow={true}
      castShadow={true}
      ref={boxMesh}
      onClick={() => setclicked(!clicked)}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} color={"white"} />
    </mesh>
  );
};

export default Box;
