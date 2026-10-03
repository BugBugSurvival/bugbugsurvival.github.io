// Sidebar navigation: scroll position + selected state only.
// Appearance, scroll margin and browser scroll-behavior belong in style.css.
const NAVIGATION_DURATION_MS = 360
const BOTTOM_TOLERANCE_PX = 3

export function initNavigation() {
  const links = new Map(
    [...document.querySelectorAll('.toc a[href^="#"]')]
      .map((link) => [link.getAttribute('href').slice(1), link]),
  )
  const sections = [...links.keys()]
    .map((id) => document.getElementById(id))
    .filter(Boolean)
  if (!sections.length) return // E.g. the 404 page has no sidebar.

  let activeId = ''
  let navigationFrame = 0
  let scrollCheckFrame = 0

  function setActive(id) {
    if (!links.has(id) || id === activeId) return
    links.get(activeId)?.removeAttribute('aria-current')
    links.get(id).setAttribute('aria-current', 'location')
    activeId = id
  }

  function maxScrollY() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  }

  function targetScrollY(section) {
    const margin = parseFloat(getComputedStyle(section).scrollMarginTop) || 0
    const y = window.scrollY + section.getBoundingClientRect().top - margin
    return Math.max(0, Math.min(maxScrollY(), y))
  }

  function updateFromScroll() {
    // When the user clicked a TOC link, leave it highlighted for the whole trip.
    if (navigationFrame) return

    if (window.scrollY >= maxScrollY() - BOTTOM_TOLERANCE_PX) {
      setActive(sections[sections.length - 1].id)
      return
    }

    const activationLine = window.innerHeight * 0.35
    let currentId = sections[0].id
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= activationLine) {
        currentId = section.id
      } else {
        break
      }
    }
    setActive(currentId)
  }

  function queueScrollCheck() {
    if (navigationFrame || scrollCheckFrame) return
    scrollCheckFrame = requestAnimationFrame(() => {
      scrollCheckFrame = 0
      updateFromScroll()
    })
  }

  function cancelNavigation() {
    if (!navigationFrame) return
    cancelAnimationFrame(navigationFrame)
    navigationFrame = 0
    queueScrollCheck()
  }

  function navigateTo(section) {
    cancelNavigation()
    setActive(section.id)

    const start = window.scrollY
    const end = targetScrollY(section)
    const distance = end - start

    if (
      Math.abs(distance) < 2 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      window.scrollTo(0, end)
      return
    }

    let startedAt = null
    function step(now) {
      if (startedAt === null) startedAt = now
      const progress = Math.min(1, (now - startedAt) / NAVIGATION_DURATION_MS)
      const eased = 1 - (1 - progress) ** 3 // Fast start, soft landing.
      window.scrollTo(0, start + distance * eased)

      if (progress < 1) {
        navigationFrame = requestAnimationFrame(step)
      } else {
        window.scrollTo(0, end)
        navigationFrame = 0
        setActive(section.id)
      }
    }
    navigationFrame = requestAnimationFrame(step)
  }

  for (const [id, link] of links) {
    const section = document.getElementById(id)
    if (!section) continue
    link.addEventListener('click', (event) => {
      // Preserve modified clicks, e.g. Ctrl/Cmd+click or keyboard context menus.
      if (
        event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
      ) return

      event.preventDefault()
      // pushState updates the hash without triggering an extra native scroll.
      if (window.location.hash !== `#${id}`) {
        history.pushState(null, '', `#${id}`)
      }
      navigateTo(section)
    })
  }

  // While the visitor is actually scrolling, highlight the visible section.
  window.addEventListener('scroll', queueScrollCheck, { passive: true })
  window.addEventListener('resize', () => {
    cancelNavigation()
    queueScrollCheck()
  })
  window.addEventListener('load', queueScrollCheck)

  // Visitors can take control during an automatic scroll.
  window.addEventListener('wheel', cancelNavigation, { passive: true })
  window.addEventListener('touchstart', cancelNavigation, { passive: true })
  window.addEventListener('keydown', (event) => {
    if (
      ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
        .includes(event.key)
    ) cancelNavigation()
  })

  // Back/forward navigation can change both the hash and scroll restoration.
  window.addEventListener('popstate', () => {
    cancelNavigation()
    queueScrollCheck()
    requestAnimationFrame(queueScrollCheck)
  })
  window.addEventListener('hashchange', queueScrollCheck)

  queueScrollCheck()
}
