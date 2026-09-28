
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
    const { scene } = useGLTF("/3d/CCP_kubik.gltf");

    return (
        <primitive
            object={scene}
            scale={1}
            position={[0, 0, 0]}
        />
    );
}

function Loader() {
    
    return (
        <mesh>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial color="#fec300" wireframe />
        </mesh>
    );
}

export default function Model3D() {
    return (
        <div className="w-full aspect-square">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                />

                <Suspense fallback={<Loader />}>
                    <Model />
                </Suspense>

                <OrbitControls
                    enableRotate={true}
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={false}
                />
            </Canvas>
        </div>
    );
}

useGLTF.preload("/3d/CCP_kubik.gltf");