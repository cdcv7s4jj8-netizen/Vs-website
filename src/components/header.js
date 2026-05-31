export default function Header() {
  return `
    <div class="noise-overlay" aria-hidden="true"></div>
    <div id="cursor" class="custom-cursor" aria-hidden="true"></div>
    <div id="cursor-dot" class="custom-cursor-dot" aria-hidden="true"></div>
    <header class="fixed top-0 left-0 right-0 z-30 glass-card py-5 px-6 flex justify-between items-center" role="banner">
      <div class="font-bold text-xl text-primary-container">CLIPEMPIRE</div>
      <nav class="hidden md:flex gap-6 text-sm text-on-background/80" role="navigation" aria-label="Main Navigation">
        <a href="#methodology">Methodology</a>
        <a href="#results">Results</a>
        <a href="#path">Path</a>
      </nav>
      <div class="ml-auto">
        <button class="bg-primary-container text-on-primary-container px-4 py-2 rounded font-bold" aria-label="Ascend">ASCEND</button>
      </div>
    </header>`
}
