import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, MeshDistortMaterial } from "@react-three/drei";

const SilkBlob = ({ position, color, scale, speed, distort, drift }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (!ref.current) return;
    ref.current.rotation.z = t * 0.04 * drift;
    ref.current.rotation.x = Math.sin(t * 0.08) * 0.25;
    ref.current.position.y = position[1] + Math.sin(t * 0.15 * drift) * 0.4;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        speed={speed}
        distort={distort}
        roughness={0.15}
        metalness={0.55}
      />
    </mesh>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.35} />
    <pointLight position={[4, 3, 4]} intensity={22} color="#C084FC" />
    <pointLight position={[-5, -2, 2]} intensity={14} color="#7C3AED" />
    <directionalLight position={[0, 5, 5]} intensity={0.8} color="#F0ABFC" />
    <SilkBlob position={[2.6, -1.6, -2]} color="#4C1D95" scale={3.4} speed={1.4} distort={0.45} drift={1} />
    <SilkBlob position={[-3.2, 1.8, -3.5]} color="#6D28D9" scale={2.6} speed={1.1} distort={0.5} drift={-0.8} />
    <SilkBlob position={[0.4, -3.4, -4.5]} color="#3B0764" scale={3.8} speed={0.9} distort={0.38} drift={0.6} />
    <Sparkles count={160} scale={[14, 14, 8]} size={2.6} speed={0.35} opacity={0.75} color="#E9D5FF" />
    <Sparkles count={60} scale={[10, 12, 6]} size={5} speed={0.2} opacity={0.4} color="#C084FC" />
  </>
);

export const AuroraBackground = () => (
  <div className="fixed inset-0 z-0" aria-hidden="true" data-testid="aurora-background">
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false }}
      style={{ background: "#030005" }}
    >
      <Scene />
    </Canvas>
    <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(3,0,5,0.55) 100%)" }} />
    <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(3,0,5,0.8), transparent)" }} />
  </div>
);
