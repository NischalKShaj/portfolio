import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Molecule } from "../../components/Molecule";
import { moleculeSkills } from "../../constants/moleculeSkills";

const MoleculeCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} />
      <Molecule skills={moleculeSkills} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default MoleculeCanvas;
