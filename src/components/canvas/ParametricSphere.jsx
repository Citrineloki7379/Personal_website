import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useHelper, meshBounds, AdaptiveDpr, BakeShadows } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ParametricSphere = ({isMobile }) => {
  const sphere = useGLTF('/aeriusu_drone_ship/scene.glb');

  return (
    <mesh rotation={[0, -Math.PI / 1, -Math.PI / 8]} raycast={meshBounds}> 
      <hemisphereLight intensity={0.35}
      groundColor='blue'/>
      <pointLight intensity={0.1} />
      <spotLight position={[7,4,5]} 
      angle={0.15}
      penumbra={1}
      intensity={0.4}
      castShadow
      shadow-mapSise={256}/>
      <primitive object={sphere.scene}
      position={[0,-3,0]}
      scale={isMobile ? 0.45 : 0.5} />
    </mesh>
  );
};

const ParametricSphereCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      setIsMobile(false);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [4,8,5], fov: 100}}
      gl={{ preserveDrawingBuffer: false, powerPreference: "high-performance", precision: "lowp", antialias: false, pixelRatio: [1, 2]}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={isMobile ? 1.25 : 2}/>

        <ParametricSphere isMobile={isMobile}/>
      </Suspense>
      <AdaptiveDpr pixelated />
      <BakeShadows />
      <Preload all />
    </Canvas>
  );
};

export default ParametricSphereCanvas;