import React, { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { useSpring, animated,config } from '@react-spring/three'
import { TextureLoader } from "three";

const Box2 = (props) => {
  const [active, setActive] = useState(false);
  const springs = useSpring({ scale: active ? 1.5 : 1 });
  const { scale } = useSpring({ scale: active ? 1.5 : 1,config: config.wobbly, });
  const texture = useLoader(TextureLoader, "/texture.png");
  const boxMesh = useRef();
  return (
    <animated.mesh scale={scale} onClick={() => setActive(!active)} ref={boxMesh} {...props}>
        <boxGeometry />
        <meshPhongMaterial color="royalblue" />
    </animated.mesh>
  );
};

export default Box2;