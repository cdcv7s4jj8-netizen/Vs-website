import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export async function initScene({ canvasId = 'hero-canvas', gltfUrl } = {}) {
  const canvas = document.getElementById(canvasId)
  if (!canvas) return null

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 6)

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  const ambient = new THREE.AmbientLight(0x202020)
  scene.add(ambient)
  const key = new THREE.PointLight(0x66ff99, 1.6, 15)
  key.position.set(6, 4, 6)
  scene.add(key)

  // fallback geometry (procedural shader-like material)
  const fallback = () => {
    const geo = new THREE.TorusKnotGeometry(1.15, 0.33, 256, 48)
    const mat = new THREE.MeshStandardMaterial({ color: 0x00ff66, metalness: 0.6, roughness: 0.18, emissive: 0x003300 })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.name = 'heroFallback'
    scene.add(mesh)
    return mesh
  }

  let hero = null
  if (gltfUrl) {
    try {
      const loader = new GLTFLoader()
      const gltf = await loader.loadAsync(gltfUrl)
      hero = gltf.scene
      hero.traverse((n) => { if (n.isMesh) n.castShadow = true })
      scene.add(hero)
    } catch (err) {
      console.warn('GLTF failed to load, using fallback', err)
      hero = fallback()
    }
  } else {
    hero = fallback()
  }

  // responsive
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onResize)

  const clock = new THREE.Clock()
  const tick = () => {
    const t = clock.getElapsedTime()
    if (hero) {
      hero.rotation.x = Math.sin(t * 0.2) * 0.25
      hero.rotation.y = t * 0.25
      hero.rotation.z = Math.cos(t * 0.15) * 0.15
    }
    renderer.render(scene, camera)
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)

  return { scene, camera, renderer }
}
