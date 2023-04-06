import { useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export default function Experience(props)
{
    const mesh = useRef()
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += delta))
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}>
        <boxBufferGeometry></boxBufferGeometry>
        <meshStandardMaterial></meshStandardMaterial>
      </mesh>
    )
}