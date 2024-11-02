import React, { Suspense, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={Math.PI} />
      <directionalLight position={[0, 0, 0.05]} />

      {/* eslint-disable react/no-unknown-property */}
      <mesh castShadow receiveShadow scale={isMobile ? 1.75 : 2.75}>
        {/* args is required for geometry in Three.js */}
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-1}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
      {/* eslint-enable react/no-unknown-property */}
    </Float>
  );
};

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  isMobile: PropTypes.bool,
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);
      setError(
        isMobileDevice
          ? "3D model may not render properly on mobile devices due to rendering limitations."
          : null
      );
    };
    handleResize(); // Set initial value based on screen size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;
  }

  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      dpr={isMobile ? [1, 1.5] : [1, 2]} // Adjust DPR for mobile
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={!isMobile} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default BallCanvas;
