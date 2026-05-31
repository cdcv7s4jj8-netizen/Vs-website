import './styles.css'
import { gsap } from 'gsap'
import './styles.css'
import { initScene } from './three/scene.js'
import Header from './components/header.js'
import Hero from './components/hero.js'
import Footer from './components/footer.js'
import initRouter from './router.js'

// simple component helpers
function Header() {
  return `
    <div class="noise-overlay"></div>
    <div id="cursor" class="custom-cursor"></div>
    <div id="cursor-dot" class="custom-cursor-dot"></div>
    <header class="fixed top-0 left-0 right-0 z-30 glass-card py-5 px-6 flex justify-between items-center">
      <div class="font-bold text-xl text-primary-container">CLIPEMPIRE</div>
      <nav class="hidden md:flex gap-6 text-sm text-on-background/80">
        <a href="#methodology">Methodology</a>
        <a href="#results">Results</a>
        <a href="#path">Path</a>
      </nav>
      <div class="ml-auto">
        <button class="bg-primary-container text-on-primary-container px-4 py-2 rounded font-bold">ASCEND</button>
      </div>
    </header>`
}

function Hero() {
  return `
    <main class="relative min-h-screen flex items-center justify-center cinematic-bg">
      <canvas id="hero-canvas" class="hero-canvas"></canvas>
      <div class="relative z-10 text-center px-6">
        <div class="reveal-up active">
          <h1 class="text-4xl md:text-7xl font-black uppercase tracking-tight">ESCAPE THE <span class="text-primary-container">MATRIX</span></h1>
          <p class="mt-6 max-w-2xl mx-auto opacity-80">The algorithm is a weapon of mass distraction. Turn it into a monetization engine.</p>
          <div class="mt-8 flex gap-4 justify-center">
            <button id="joinBtn" class="bg-primary-container text-on-primary-container px-6 py-3 font-bold rounded bloom-primary">JOIN THE EMPIRE</button>
            <button class="border border-white/20 glass-card text-white px-6 py-3 rounded">THE METHODOLOGY</button>
          </div>
        </div>
      </div>
    </main>`
}

function Methodology() {
  return `
    <section id="methodology" class="py-24 px-6">
      <div class="max-w-5xl mx-auto reveal-up">
        <h2 class="text-3xl font-black">THE CLIPPER'S EDGE</h2>
        <p class="mt-4 opacity-80">A ruthless, step-by-step path designed to bypass algorithmic suppression and maximize viewer retention.</p>
      </div>
    </section>`
}

function Footer() {
  return `
    <footer class="py-10 px-6 glass-card">
      <div class="max-w-6xl mx-auto text-center text-sm opacity-80">© 2026 CLIPEMPIRE — DATA ENCRYPTED</div>
    </footer>`
}

const app = document.getElementById('app')
app.innerHTML = [Header(), Hero(), Methodology(), Footer()].join('\n')

// initialize tiny router
initRouter()

/* --------- Custom cursor and cinematic background ------- */
const cursor = document.getElementById('cursor')
const cursorDot = document.getElementById('cursor-dot')
document.addEventListener('mousemove', (e) => {
  const x = e.clientX
  const y = e.clientY
  cursor.style.left = x + 'px'
  cursor.style.top = y + 'px'
  cursorDot.style.left = x + 'px'
  cursorDot.style.top = y + 'px'
  const percentX = (x / window.innerWidth) * 100
  const percentY = (y / window.innerHeight) * 100
  document.body.style.setProperty('--mouse-x', `${percentX}%`)
  document.body.style.setProperty('--mouse-y', `${percentY}%`)
})

document.addEventListener('mousedown', () => {
  cursor.style.width = '64px'
  cursor.style.height = '64px'
  cursor.style.background = 'rgba(0,255,65,0.5)'
})
document.addEventListener('mouseup', () => {
  cursor.style.width = '44px'
  cursor.style.height = '44px'
  cursor.style.background = 'rgba(0,255,65,0.28)'
})

/* --------- Reveal observer for elements with .reveal-up ------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active')
  })
}, { threshold: 0.15 })
document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el))

/* initialize Three scene (production-ready module) */
// Try loading a production GLTF; if the URL is blocked or missing, the module falls back to the procedural mesh.
const sampleGLTF = 'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf'
initScene({ canvasId: 'hero-canvas', gltfUrl: sampleGLTF }).then(() => {
  gsap.from('#joinBtn', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out' })
})

/* --------- Additional Page Sections: Results, Path, Final CTA ------- */
const resultsSection = `
  <section id="results" class="py-16 px-6 bg-background">
    <div class="max-w-6xl mx-auto text-center reveal-up">
      <h2 class="text-4xl font-black">VERIFIED RESULTS</h2>
      <p class="mt-4 opacity-80">Real-time extractions from the digital economy. No fluff.</p>
    </div>
    <div class="mt-10 overflow-hidden">
      <div class="flex gap-6 px-6 md:px-12 justify-center flex-wrap">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKADkSAd0WrW8VtnatZT4QdrgpNxcIK8LNM0qrNqyT6FUZGQpi0XeyUf16bsaGsiBiN3GzcLDbdXTu3ihJiGLDPql2VGmS6E9Qqmbyj0_E7yvGL47ilFSUaha9bcTifklM9UIw51C7z-md0k_mxCNkdGUtldgywaqZB2CLinEnT1Vl9bR7pI2s3f49Rutx9YhwslxX1fstkzH-BEuxyp585tly4Rip3upEvwtiZpgh5AiBSSVqEfV-DW2JP3jbT4N607uwtzTiAZs" alt="Result 1" class="w-64 h-40 object-cover rounded-lg glass-card"/>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGjTKEN9qa9oohMMGNqYDzWRKjJ4IVsP2m4NyHdki28NZ5kfaQ8n7-ERkt4xYkewBO7UU0Wt7ilzUJG1sbR57MGEWQL7VKl5WDQY-40RZ7rEM2EWQSV4IS709Wt2DO9SkN4i8iVeSg7ebl2ixbU5Kor66hoFyffdRSvIennLbO5RU4ItMA1Rnl-W3fE_bKM7lqMzoQh57FEUdJZZ376v04GXouNK-_X3OxKik5m37qm3Fpt8BzlYlGdK2sfJ_Gm7sfZUlRjxiuPTc" alt="Result 2" class="w-64 h-40 object-cover rounded-lg glass-card"/>
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2yYSBGHB5fO_ySuY40NtGK1ce1GFAcBJfvhEjIve4onzwsSOkAv0K6pwlGFBAk8BGod0HYyR0wBig5kCWYXvBDosoO5-DT7N-jmHzAJu3OBVCUYg3z-nrhvRdG3basTBfZFHIphG0mv718FPMbCLy4jCrXXtFcmi1dkmMyRMaIUPd9oUytEHtocLJcj-1B9G95fhK5RcUV-Hm64Cy8rQUM0nY6lgoxeU2aofmEN3P2xiFi0zxDAq9Q2qnXEoLttUnUD6n1q2XaKg" alt="Result 3" class="w-64 h-40 object-cover rounded-lg glass-card"/>
      </div>
    </div>
  </section>
`

const pathSection = `
  <section id="path" class="py-20 px-6">
    <div class="max-w-6xl mx-auto reveal-up">
      <h2 class="text-3xl font-black">THE CHOICE IS YOURS</h2>
      <div class="mt-8 grid md:grid-cols-2 gap-6">
        <div class="glass-card p-6 opacity-60">
          <h3 class="font-bold">SETTLE FOR LESS</h3>
          <ul class="mt-4 list-disc list-inside opacity-80">
            <li>Stay unfulfilled in a 9-5</li>
            <li>Waste hours on unmonetized distraction</li>
            <li>Remain stagnant</li>
          </ul>
        </div>
        <div class="glass-card p-6 border-primary-container/30">
          <h3 class="font-bold text-primary-container">ASCEND TO EMPIRE</h3>
          <ul class="mt-4 list-disc list-inside text-white">
            <li>Master the Clipper's Edge</li>
            <li>Access cutting-edge tools</li>
            <li>Monetize at scale</li>
          </ul>
          <button class="mt-6 w-full bg-primary-container text-on-primary-container py-3 rounded">LOCK IN ACCESS</button>
        </div>
      </div>
    </div>
  </section>
`

const finalCTA = `
  <section class="py-28 px-6 text-center reveal-up">
    <h2 class="text-5xl font-black">EMPIRE <span class="text-primary-container">AWAITS</span></h2>
    <p class="mt-6 max-w-3xl mx-auto opacity-80">Registration for the Elite Tier is restricted. Secure your place before the next algorithmic shift.</p>
    <div class="mt-8">
      <button class="bg-primary-container text-on-primary-container px-8 py-4 rounded font-bold">ASCEND NOW</button>
    </div>
  </section>
`

// inject the new sections after the hero
const mainEl = document.querySelector('main')
if (mainEl) {
  mainEl.insertAdjacentHTML('afterend', resultsSection + pathSection + finalCTA)
  // re-observe new reveal elements
  document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el))
}

