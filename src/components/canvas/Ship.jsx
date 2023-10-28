import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ship = () => {

  const ship = useGLTF('./ship_in_a_bottle/scene.gltf');
  return (
    <mesh rotation={[Math.PI / 4, 0, 0]}>
      <hemisphereLight intensity={0.35}
      groundColor='blue'/>
      <pointLight intensity={0.1} />
      <spotLight position={[10,25,5]} 
      angle={0.15}
      penumbra={1}
      intensity={0.4}
      castShadow
      shadow-mapSise={256}/>
      <primitive 
    object={ship.scene}
    scale={1.45}
    position-y={0}
    rotation-y={0}
    />
    </mesh>
  )
}

const ShipCanvas = () => {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{ preserveDrawingBuffer: true}}
    camera={{fov: 90, near: 0.1, far: 200, position: [0,-2,3.5]}}>

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        autoRotateSpeed={2}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />

        <Ship />
      </Suspense>

    </Canvas>
  )
}

export default ShipCanvas