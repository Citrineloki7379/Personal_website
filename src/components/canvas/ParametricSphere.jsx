import { Suspense, useEffect, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useHelper } from '@react-three/drei';
import CanvasLoader from '../Loader';

const ParametricSphere = ({isMobile }) => {
  const sphere = useGLTF('/parametric_surface/scene.gltf');

  return (
    <mesh> 
      <hemisphereLight intensity={0.35}
      groundColor='blue'/>
      <pointLight intensity={0.1} />
      <spotLight position={[1000, 2000, -1000]} 
      angle={0.15}
      penumbra={1}
      intensity={0.4}
      castShadow
      shadow-mapSise={1024}/>
      <primitive object={sphere.scene}
      position={[150,100,0]}
      scale={isMobile ? 0.75 : 1} />
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
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [250,0,250], fov: 100}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={6}/>

        <ParametricSphere isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ParametricSphereCanvas;