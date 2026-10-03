// Home-page entry point. General UI interactions live here; sidebar scrolling
// and scrollspy live in navigation.js. Vite resolves this module import.
import { initNavigation } from './navigation.js'

// Theme: follow the OS unless the visitor selects the opposite appearance.
const root = document.documentElement
const systemDark = window.matchMedia('(prefers-color-scheme: dark)')
const isDark = () =>
  root.dataset.theme ? root.dataset.theme === 'dark' : systemDark.matches

for (const toggle of document.querySelectorAll('.theme-toggle')) {
  toggle.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark'
    const followsSystem = (next === 'dark') === systemDark.matches
    try {
      if (followsSystem) localStorage.removeItem('theme')
      else localStorage.setItem('theme', next)
    } catch {
      // Browsers may disable storage. The in-page preference still works.
    }
    if (followsSystem) delete root.dataset.theme
    else root.dataset.theme = next
  })
}

// Expand and collapse individual BibTeX entries.
for (const button of document.querySelectorAll('.bib-toggle')) {
  button.addEventListener('click', () => {
    const box = document.getElementById(button.getAttribute('aria-controls'))
    if (!box) return
    box.hidden = !box.hidden
    button.setAttribute('aria-expanded', String(!box.hidden))
  })
}

// Copy BibTeX without disrupting the navigation state or section positions.
for (const button of document.querySelectorAll('.copy')) {
  button.addEventListener('click', async () => {
    const codeElement = button.closest('.bib-box')?.querySelector('code')
    if (!codeElement) return

    try {
      await navigator.clipboard.writeText(codeElement.textContent)
      button.textContent = 'Copied'
    } catch {
      button.textContent = 'Select & copy'
      const selection = window.getSelection()
      selection?.removeAllRanges()
      const range = document.createRange()
      range.selectNodeContents(codeElement)
      selection?.addRange(range)
    }

    window.setTimeout(() => {
      button.textContent = 'Copy'
    }, 1500)
  })
}

initNavigation()

// Section reveal: opacity only. CSS owns visual effects and reduced-motion rules.
const reveals = document.querySelectorAll('.reveal')
if (!('IntersectionObserver' in window)) {
  for (const element of reveals) element.classList.add('is-visible')
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  )
  for (const element of reveals) observer.observe(element)
}
