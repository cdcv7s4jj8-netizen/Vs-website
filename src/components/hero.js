export default function Hero() {
  return `
    <main id="main" class="relative min-h-screen flex items-center justify-center cinematic-bg" role="main">
      <canvas id="hero-canvas" class="hero-canvas" aria-hidden="true"></canvas>
      <div class="relative z-10 text-center px-6">
        <div class="reveal-up active">
          <h1 class="text-4xl md:text-7xl font-black uppercase tracking-tight">ESCAPE THE <span class="text-primary-container">MATRIX</span></h1>
          <p class="mt-6 max-w-2xl mx-auto opacity-80">The algorithm is a weapon of mass distraction. Turn it into a monetization engine.</p>
          <div class="mt-8 flex gap-4 justify-center">
            <button id="joinBtn" class="bg-primary-container text-on-primary-container px-6 py-3 font-bold rounded bloom-primary" aria-label="Join the Empire">JOIN THE EMPIRE</button>
            <button class="border border-white/20 glass-card text-white px-6 py-3 rounded" aria-label="View methodology">THE METHODOLOGY</button>
          </div>
        </div>
      </div>
    </main>`
}
