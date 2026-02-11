import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const GlobeMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.15;
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.15;
  });

  // City markers as lat/lng → 3D positions
  const cities = useMemo(() => {
    const coords = [
      [40.7, -74], [51.5, -0.1], [1.35, 103.8], [35.7, 139.7],
      [-33.9, 18.4], [19.4, -99.1], [28.6, 77.2], [-23.5, -46.6],
      [55.75, 37.6], [31.2, 121.5], [25.2, 55.3], [-1.3, 36.8],
      [48.9, 2.35], [37.6, 127], [6.5, 3.4], [14.6, 121],
    ];
    const positions = new Float32Array(coords.length * 3);
    const r = 1.02;
    coords.forEach(([lat, lng], i) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      positions[i * 3] = -r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi);
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    });
    return positions;
  }, []);

  // Wireframe grid points
  const gridPoints = useMemo(() => {
    const pts: number[] = [];
    const r = 1.001;
    for (let lat = -80; lat <= 80; lat += 10) {
      for (let lng = 0; lng < 360; lng += 8) {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);
        pts.push(
          -r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        );
      }
    }
    return new Float32Array(pts);
  }, []);

  return (
    <group>
      {/* Globe sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshBasicMaterial
          color="#1a1a20"
          transparent
          opacity={0.6}
          wireframe={false}
        />
      </mesh>

      {/* Grid dots */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[gridPoints, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#b8964a"
          size={0.008}
          transparent
          opacity={0.25}
          sizeAttenuation
        />
      </points>

      {/* City markers */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[cities, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#d4a94d"
          size={0.04}
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>

      {/* Atmosphere glow ring */}
      <mesh>
        <sphereGeometry args={[1.08, 48, 48]} />
        <meshBasicMaterial
          color="#b8964a"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

const Globe3D = () => {
  return (
    <div className="w-full h-full" style={{ minHeight: 280 }}>
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <GlobeMesh />
      </Canvas>
    </div>
  );
};

export default Globe3D;
