import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import PropTypes from "prop-types";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={Math.PI} groundColor={"black"} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={{ width: 1024, height: 1024 }}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

Computers.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    if (mediaQuery.matches) {
      setError(
        "3D model may not render properly on mobile devices due to rendering limitations."
      );
    } else {
      setError(null);
    }

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      if (event.matches) {
        setError(
          "3D model may not render properly on mobile devices due to rendering limitations."
        );
      } else {
        setError(null);
      }
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  if (error) {
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
