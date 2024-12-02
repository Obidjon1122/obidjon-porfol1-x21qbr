import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera } from '@react-three/drei';
import { Mesh } from 'three';

export function Scene() {
  const boxRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={boxRef} position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#4338ca" />
        </mesh>
      </Float>
    </>
  );
}