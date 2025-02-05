// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-started-my-phd",
          title: '💮 Started my PhD! 🇬🇧',
          description: "",
          section: "News",},{id: "news-i-will-talk-about-our-work-using-genetic-algorithms-to-find-good-grammars-for-synthesis-at-synt-2023-in-paris",
          title: '🎤 I will talk about our work using genetic algorithms to find good...',
          description: "",
          section: "News",},{id: "news-talk-at-europroofnet-austria-this-talk-will-cover-how-llms-can-enhance-synthesis",
          title: '🎤 Talk at EuroProofNet, Austria! 🇦🇹 This talk will cover how LLMs can...',
          description: "",
          section: "News",},{id: "news-our-paper-on-guiding-enumerative-program-synthesis-with-large-language-models-has-been-accepted-at-cav-2024",
          title: '🎉🎉 Our paper on Guiding Enumerative Program Synthesis with Large Language Models has...',
          description: "",
          section: "News",},{id: "news-cav-2024-vmw-scholarship",
          title: '🪙 CAV 2024 VMW Scholarship! 🇨🇦',
          description: "",
          section: "News",},{id: "news-talk-at-heriot-watt-laiv-ai-verification-seminar",
          title: '🎤 Talk at Heriot-Watt LAIV AI Verification Seminar! 🏴󠁧󠁢󠁳󠁣󠁴󠁿',
          description: "",
          section: "News",},{id: "news-talk-at-verified-trustworthy-software-systems-vetss-summer-school-2024-bristol",
          title: '🎤 Talk at Verified Trustworthy Software Systems (VeTSS) Summer School 2024, Bristol! 🇬🇧...',
          description: "",
          section: "News",},{id: "news-computer-new-research-internship-at-heriot-watt-university-grateful-to-be-working-with-prof-ekaterina-komendantskaya-and-the-team-under-the-epsrc-aisec-project",
          title: ':computer: New Research Internship at Heriot-Watt University! 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Grateful to be working with...',
          description: "",
          section: "News",},{id: "news-talk-on-programm-synthesis-amp-amp-llms-at-the-university-of-bristol-thanks-to-dr-cristina-david-and-the-bristol-pl-group-for-the-warm-welcome-and-engaging-discussions",
          title: '🎤 Talk on Programm synthesis &amp;amp;amp; LLMs at the University of Bristol! 🇬🇧...',
          description: "",
          section: "News",},{id: "news-our-paper-on-online-prompt-selection-has-been-accepted-at-aaai-2025",
          title: '🎉🎉 Our paper on Online Prompt Selection has been accepted at AAAI 2025!🎊🎊...',
          description: "",
          section: "News",},{id: "teaching-infr09032-system-design-project-ta",
          title: 'INFR09032: System Design Project (TA)',
          description: "",
          section: "Teaching",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
