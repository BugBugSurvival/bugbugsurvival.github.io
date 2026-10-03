// Build-time HTML. vite.config.js replaces each `<!-- @name -->` comment in the
// .html pages with blocks[name](path), so the output is plain static HTML.

import { site, links, bio, skills, sections } from './data/profile.js'
import { me, publications } from './data/publications.js'

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

// SF Symbols-like strokes (SF Symbols itself can't be used on the web)
const stroke = (body, width = 2) =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`
const fill = (d) => `<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${d}"/></svg>`

const icons = {
  file: stroke('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>'),
  sun: stroke('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-17.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>'),
  moon: stroke('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'),
  upRight: stroke('<path d="M7 17 17 7"/><path d="M8 7h9v9"/>'),
  about: stroke('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.66V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.66"/>'),
  education: stroke('<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>'),
  experience: stroke('<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>'),
  publications: stroke('<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>'),
  talks: stroke('<path d="M12 19v3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><rect x="9" y="2" width="6" height="13" rx="3"/>'),
  awards: stroke('<path d="m15.48 12.89 1.51 8.53a.5.5 0 0 1-.81.47l-3.58-2.69a1 1 0 0 0-1.2 0l-3.59 2.69a.5.5 0 0 1-.81-.47l1.51-8.53"/><circle cx="12" cy="8" r="6"/>'),
  scholar: fill('M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z'),
  linkedin: fill('M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.948 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'),
}

const updated = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

const themeToggle = `<button class="theme-toggle" type="button" aria-label="Toggle dark mode">${icons.sun}${icons.moon}</button>`

// Keeps a trailing icon on the same line as the last word.
function withIcon(text, icon) {
  const i = text.lastIndexOf(' ')
  return `${text.slice(0, i + 1)}<span class="nowrap">${text.slice(i + 1)}${icon}</span>`
}

// ---------------------------------------------------------------- publications

function bibtex(p) {
  const fields = {
    title: p.title,
    author: p.authors.join(' and '),
    year: String(p.year),
    ...p.bib,
    ...(p.doi && { doi: p.doi }),
  }
  const body = Object.entries(fields)
    .map(([k, v]) => `  ${k} = {${v.replace(/’/g, "'")}}`)
    .join(',\n')
  return `@${p.type}{${p.key},\n${body}\n}`
}

const doiUrl = (p) => p.doi && `https://doi.org/${p.doi}`

const bibBox = (id, code) => `
      <div class="bib-box" id="${id}" hidden>
        <div class="bib-head"><span>BibTeX</span><button class="copy" type="button">Copy</button></div>
        <pre><code>${esc(code)}</code></pre>
      </div>`

function publication(p) {
  const authors = p.authors
    .map((a) => (a === me ? `<span class="me">${esc(a)}</span>` : esc(a)))
    .join(', ')
  const url = doiUrl(p)
  const title = url ? `<a href="${esc(url)}">${withIcon(esc(p.title), icons.upRight)}</a>` : esc(p.title)
  return `
  <li class="row pub">
    <div class="row-main">
      <span class="badge">${esc(p.badge)}</span>
      <h3 class="pub-title">${title}</h3>
      <p class="pub-authors">${authors}</p>
      <p class="pub-venue">${esc(p.venue)}, ${p.year}</p>
      <div class="pub-actions">
        ${url ? `<a class="btn" href="${esc(url)}">DOI</a>` : ''}
        <button class="btn bib-toggle" type="button" aria-expanded="false" aria-controls="bib-${p.key}">BibTeX</button>
      </div>
      ${bibBox(`bib-${p.key}`, bibtex(p))}
    </div>
  </li>`
}

const pubGroup = (list) => `<ol class="group">${list.map(publication).join('')}</ol>`

// ---------------------------------------------------------------- home page

// One row of an inset grouped list: content on the left, value on the right.
function row(it) {
  const detail = (it.detail ?? []).map((d) => `<p class="row-detail rich">${d}</p>`).join('')
  return `
    <li class="row">
      <div class="row-main">
        <p class="row-title">${it.what}</p>
        ${it.where ? `<p class="row-sub">${it.where}</p>` : ''}
        ${detail}
      </div>
      <span class="row-value">${it.when}</span>
    </li>`
}

const group = (list) => `<ul class="group">${list.map(row).join('')}</ul>`

function sectionBody(s) {
  if (s.id === 'publications') return pubGroup(publications)
  if (s.groups) {
    return s.groups.map((g) => `<h3 class="group-header">${g.title}</h3>${group(g.items)}`).join('')
  }
  return group(s.items)
}

function aboutSection() {
  const tags = skills
    .map(
      (g) => `
      <div class="skill-group">
        <span class="skill-label">${g.label}</span>
        <ul class="tags">${g.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
      </div>`,
    )
    .join('')
  return `
  <section class="section reveal" id="about" aria-label="About">
    <h2 class="section-title">About</h2>
    <div class="bio rich">${bio.map((p) => `<p>${p}</p>`).join('')}</div>
    <div class="skills">${tags}</div>
  </section>`
}

// ---------------------------------------------------------------- blocks

export const blocks = {
  head: () => `
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="${esc(site.name)}" />
    <meta property="og:site_name" content="${esc(site.title)}" />
    <meta property="og:image" content="${site.url}/img/prof_pic_320.jpeg" />
    <link rel="icon" href="/img/favicon.png" />
    <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
    <script>document.documentElement.classList.add('js');try{const t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch{}</script>`,

  // Home: fixed left column on desktop, top of page on mobile.
  sidebar: () => `
  <header class="sidebar">
    <div>
      <a class="avatar-link" href="/" aria-label="Home"><img class="avatar" src="/img/prof_pic_320.webp" width="320" height="400" alt="Portrait of ${esc(site.name)}" /></a>
      <h1 class="name">${esc(site.title)}</h1>
      <p class="role">${site.role}</p>
      <p class="tagline">${site.tagline}</p>
      <nav class="toc" aria-label="Sections">
        <ul>
          <li><a href="#about">${icons.about}About</a></li>
          ${sections.map((s) => `<li><a href="#${s.id}">${icons[s.id] ?? ''}${s.nav}</a></li>`).join('')}
        </ul>
      </nav>
    </div>
    <div class="sidebar-foot">
      <ul class="links">
        ${links.map((l) => `<li><a href="${l.href}">${icons[l.icon] ?? ''}${l.label}</a></li>`).join('')}
      </ul>
      ${themeToggle}
    </div>
  </header>`,

  sections: () =>
    aboutSection() +
    sections
      .map(
        (s) => `
  <section class="section reveal" id="${s.id}" aria-label="${s.nav}">
    <h2 class="section-title">${s.title}</h2>
    ${sectionBody(s)}
  </section>`,
      )
      .join(''),

  footer: () => `
  <footer class="site-footer">
    <p>Copyright © ${new Date().getFullYear()} ${esc(site.name)}. Last updated ${updated}.</p>
  </footer>`,

}
