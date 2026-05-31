// Very small hash router to toggle visible sections if needed in future
export default function initRouter() {
  function onHash() {
    const hash = location.hash.replace('#','') || 'home'
    document.querySelectorAll('section, main').forEach(el => el.setAttribute('aria-hidden', 'true'))
    if (hash === 'home') {
      const main = document.querySelector('main')
      if (main) main.removeAttribute('aria-hidden')
    } else {
      const el = document.getElementById(hash)
      if (el) el.removeAttribute('aria-hidden')
    }
  }
  window.addEventListener('hashchange', onHash)
  onHash()
}
