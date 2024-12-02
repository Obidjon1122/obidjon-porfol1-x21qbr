import { Canvas } from '@react-three/fiber';
import { Scene } from './Scene';

export function Canvas3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}