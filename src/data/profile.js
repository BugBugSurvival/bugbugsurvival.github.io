// Everything shown on the home page lives here. Edit, save, and the dev
// server reloads. Strings are inserted as HTML, so inline <a>, <em>, etc. work.

export const site = {
  url: 'https://bugbugsurvival.github.io',
  name: 'Yixuan Li',
  title: 'Dr Yixuan Li',
  role: 'Researcher in LLMs, formal methods &amp; programming languages',
  tagline: 'I design LLM-enabled techniques for trustworthy, user-friendly reasoning frameworks.',
}

export const links = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=7X554ioAAAAJ', icon: 'scholar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yixuan-li-phd', icon: 'linkedin' },
  { label: 'CV', href: '/pdf/Yixuan_Li_PhD_CV.pdf', icon: 'file' },
]

export const bio = [
  `I’m currently a Senior AI Engineer at the <a href="https://www.gsma.com/">GSMA</a>. Before joining
  the GSMA, I completed my PhD in Computer Science at the
  <a href="https://informatics.ed.ac.uk/">University of Edinburgh</a> (2022–2025), funded by a fully
  supported scholarship and co-advised by <a href="https://polgreen.github.io/">Elizabeth Polgreen</a>
  and <a href="https://www.dcs.ed.ac.uk/home/mob/">Michael O’Boyle</a>. Earlier, I earned an MSc
  (Distinction) in Image and Video Communications and Signal Processing from the
  <a href="https://www.bristol.ac.uk/">University of Bristol</a> and a BEng in Electronic Information
  from <a href="https://en.xidian.edu.cn/">Xidian University</a>.`,
  `My research focuses on <strong>large language models</strong>, <strong>formal methods</strong> and
  <strong>programming languages</strong>, in particular program synthesis and verification, and has
  been published at PLDI, AAAI, CAV, ACL Findings, FMCAD and IEEE TAC.`,
]

// Shown as tags under the bio.
export const skills = [
  { label: 'Languages', items: ['English', 'Mandarin', 'French', 'Japanese'] },
]

// Home page sections, in order. `nav` is the label in the sidebar menu.
// Each item is a row: what (+ where, detail lines) on the left, when on the
// right. A section can split into `groups`.
export const sections = [
  {
    id: 'education',
    title: 'Education',
    nav: 'Education',
    items: [
      {
        when: '2022–2025',
        what: 'PhD, Computer Science',
        detail: [
          'Informatics scholarship. Advised by <a href="https://polgreen.github.io/">Elizabeth Polgreen</a> and <a href="https://www.dcs.ed.ac.uk/home/mob/">Michael O’Boyle</a>',
          'Thesis: <a href="https://era.ed.ac.uk/server/api/core/bitstreams/e042f7ca-af26-4893-9c81-091296c5dafc/content"><em>Large Language Model Enabled Program Synthesis</em></a>',
        ],
        where: 'University of Edinburgh',
      },
      {
        when: '2020–2021',
        what: 'MSc, Image and Video Communications and Signal Processing',
        detail: ['Distinction (GPA 76/100)'],
        where: 'University of Bristol',
      },
      {
        when: '2014–2018',
        what: 'BEng, Electronic Information',
        where: 'Xidian University',
      },
    ],
  },
  {
    id: 'experience',
    title: 'Experience',
    nav: 'Experience',
    items: [
      {
        when: 'Jan 2026–Present',
        what: 'Senior AI Engineer',
        where: 'GSM Association (GSMA)',
      },
      {
        when: 'Sep–Dec 2025',
        what: 'Research Intern',
        detail: ['Contributed to open-source projects including an AI browser, LLM-based code analysis, and code generation tools'],
        where: 'Huawei R&amp;D UK',
      },
      {
        when: 'Nov–Dec 2024',
        what: 'Research Assistant',
        detail: ['Explored LLM-assisted theorem proving for formal verification'],
        where: 'Heriot-Watt University',
      },
      {
        when: 'Jan–Jun 2024',
        what: 'Teaching Assistant',
        detail: ['System Design Project (INFR09032). Mentored robotics teams from software design and embedded programming to fully deployed physical systems'],
        where: 'University of Edinburgh',
      },
    ],
  },
  // The selected publications are inserted here (src/data/publications.js)
  { id: 'publications', title: 'Publications', nav: 'Publications' },
  {
    id: 'talks',
    title: 'Talks',
    nav: 'Talks',
    items: [
      { when: 'Dec 2025', what: 'European OpenHarmony Technical Forum', where: 'Edinburgh, UK' },
      { when: 'Sep 2025', what: 'Compilers Seminar', where: 'University of Edinburgh' },
      { when: 'Jun 2025', what: 'PLDI Conference', where: 'Seoul, Korea' },
      { when: 'Feb 2025', what: 'AAAI Conference', where: 'Philadelphia, USA' },
      { when: 'Nov 2024', what: 'Programming Languages Seminar', where: 'University of Bristol' },
      { when: 'Oct 2024', what: 'Compilers Seminar', where: 'University of Edinburgh' },
      { when: 'May 2024', what: 'LAIV AI Verification Seminar', where: 'Heriot-Watt University' },
      { when: 'Mar 2024', what: 'EuroProofNet Workshop on Machine Learning in Proofs', where: 'Vienna, Austria' },
      { when: 'Jul 2023', what: 'SYNT Workshop', where: 'Paris, France' },
    ],
  },
  {
    id: 'awards',
    title: 'Awards &amp; service',
    nav: 'Awards &amp; service',
    groups: [
      {
        title: 'Scholarships',
        items: [
          { when: '2022–2025', what: 'Fully Funded PhD Scholarship', where: 'University of Edinburgh' },
          { when: 'May 2024', what: 'Verification Mentoring Workshop Scholarship', where: 'CAV Conference' },
          { when: 'Mar 2016', what: 'University Scholarship', where: 'Xidian University' },
        ],
      },
      {
        title: 'Service',
        items: [
          {
            when: '2025',
            what: 'EuroProofNet Workshop on Theorem Proving in the Age of LLMs',
            where: 'Co-organizer and reviewer',
          },
          {
            when: '2025',
            what: 'Tools and Algorithms for the Construction and Analysis of Systems (TACAS)',
            where: 'Reviewer',
          },
        ],
      },
    ],
  },
]
