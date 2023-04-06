import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 110,
            near: 0.1,
            far: 300,
            position: [ -4, 3, 6 ]
        } }
    >
    <ambientLight intensity={0.1} />
    <directionalLight color="blue" position={[0, 0, 5]} />
    <Experience position={[-1.2, 0, 0]} />
    <Experience position={[1.2, 0, 0]} />
    </Canvas>,
)