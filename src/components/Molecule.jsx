/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

/* ---------- Skill Label ---------- */
const SkillLabel = ({ position, label }) => {
  const groupRef = useRef();
  const labelRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (!groupRef.current || !labelRef.current) return;

    const labelWorldPos = new THREE.Vector3();
    groupRef.current.getWorldPosition(labelWorldPos);

    const centerWorldPos = new THREE.Vector3();
    groupRef.current.parent.getWorldPosition(centerWorldPos);

    const distToLabel = labelWorldPos.distanceTo(camera.position);
    const distToCenter = centerWorldPos.distanceTo(camera.position);

    const isBehind = distToLabel > distToCenter + 0.1;

    if (isBehind) {
      labelRef.current.style.color = "#cececeff";
      labelRef.current.style.opacity = "0.4";
      labelRef.current.style.transform = "scale(0.7)";
    } else {
      labelRef.current.style.color = "white";
      labelRef.current.style.opacity = "1";
      labelRef.current.style.transform = "scale(1.1)";
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Html distanceFactor={8} center>
        <div
          ref={labelRef}
          className="text-xs px-2 py-1 rounded font-bold whitespace-nowrap pointer-events-none"
          style={{
            transition: "color 0.4s, opacity 0.4s, transform 0.4s",
            textShadow: "0px 0px 4px rgba(0,0,0,0.5)",
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
};

const SPEED_Y = 0.006;
const SPEED_X = 0.003;

/* ---------- Molecule (3D Skill Cloud) ---------- */
export const Molecule = ({ skills }) => {
  const group = useRef();

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.y += SPEED_Y;
    group.current.rotation.x += SPEED_X;
  });

  // True 3D clustered distribution (golden sphere)
  const positions = skills.map((_, i) => {
    const phi = Math.acos(1 - (2 * (i + 1)) / skills.length);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;

    return new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.sin(theta)
    ).multiplyScalar(2.0);
  });

  return (
    <group ref={group}>
      {positions.map((pos, i) => (
        <SkillLabel key={skills[i]} position={pos} label={skills[i]} />
      ))}
    </group>
  );
};
