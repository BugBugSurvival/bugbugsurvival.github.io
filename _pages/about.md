---
layout: about
title: about
permalink: /
# subtitle: <a href='#'>University of Edinburgh</a>. Informatics Forum, 10 Crichton St, Newington, Edinburgh EH8 9AB, UK.

profile:
  align: left # right, left
  image: prof_pic_320.webp
  image_circular: false # crops the image to make it circular
  more_info: >


selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page
teaching: false # includes a list of experiences
announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 10 # leave blank to include all the news in the `_news` folder

# latest_posts:
#   enabled: false # includes a list of blog posts
#   scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
#   limit: 3 # leave blank to include all the blog posts


---

I am Dr Yixuan Li, a researcher at the intersection of **<span style="color:#0072BB;">large language models (LLMs)</span>**, **<span style="color:#0072BB;">formal methods</span>**, and **<span style="color:#0072BB;">programming languages</span>**, where I design LLM-enabled techniques for trustworthy, user-friendly synthesis frameworks. My work spans program synthesis, verification, and natural language driven tooling, and has been published at PLDI, AAAI, CAV, ACL Findings, FMCAD, and SYNT.

I recently completed my PhD in Computer Science at the [University of Edinburgh](https://informatics.ed.ac.uk/) (2022–2025), funded by a fully supported scholarship and co-advised by [Elizabeth Polgreen](https://polgreen.github.io/) and [Michael O’Boyle](https://www.dcs.ed.ac.uk/home/mob/). Earlier, I earned an MSc (Distinction, GPA 76/100) in Image and Video Communications and Signal Processing from the [University of Bristol](https://www.bristol.ac.uk/) and a BEng in Electronic Information from [Xidian University](https://en.xidian.edu.cn/).

My recent experience includes a research internship with Huawei R&D UK (AI browser, code analysis, and generation projects), LLM-assisted theorem proving at Heriot-Watt University, and teaching the System Design Project at Edinburgh, where I guided teams through full-stack robotic builds. Highlights from the past year include talks at PLDI, AAAI, EuroProofNet, and the European OpenHarmony Technical Forum.


<style>
  #about-sections .about-section {
    margin-top: 0.5rem;
  }
</style>

{% assign section_table_class = "table table-sm table-borderless" %}

<div id="about-sections">

<h3 style="margin-top: 3rem; margin-bottom: 0.5rem;">
  <b style="color:#4682B4"><i class="fa-solid fa-graduation-cap"></i> education</b>
</h3>
<div class="about-section">
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">2022–2025</abbr>
    </div>
    <div class="col-sm-7">
      <div><strong>PhD, Computer Science</strong> with informatics scholarship</div>
      <div>Advised by <a href="https://polgreen.github.io/">Elizabeth Polgreen</a> and <a href="https://www.dcs.ed.ac.uk/home/mob/">Michael O'Boyle</a></div>
      <div>Thesis: <em><a href="/pdf/LiY_2025.pdf">Large Language Model Enabled Program Synthesis</a></em></div>
    </div>
    <div class="col-sm-3 text-right">University of Edinburgh</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">2020–2021</abbr>
    </div>
    <div class="col-sm-7">
      <div><strong>MSc, Image and Video Communications and Signal Processing</strong></div>
      <div>Distinction (GPA 76/100)</div>
    </div>
    <div class="col-sm-3 text-right">University of Bristol</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">2014–2018</abbr>
    </div>
    <div class="col-sm-7">
      <div><strong>BEng, Electronic Information</strong></div>
    </div>
    <div class="col-sm-3 text-right">Xidian University</div>
  </div>
</div>


<h3 style="margin-top: 3rem; margin-bottom: 0.5rem;">
  <b style="color:#4682B4"><i class="fa-solid fa-laptop-code"></i> experience</b>
</h3>
<div class="about-section">
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Sep–Dec 2025</abbr>
    </div>
    <div class="col-sm-7">
      <div><strong>Research Intern</strong></div>
      <div>Contributed to open-source projects include an AI browser, LLM-based code analysis, and code generation tools</div>
    </div>
    <div class="col-sm-3 text-right">Huawei R&D UK</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Nov–Dec 2024</abbr>
    </div>
    <div class="col-sm-7">
      <div><strong>Research Assistant</strong></div>
      <div>Explored LLM-assisted theorem proving for formal verification</div>
    </div>
    <div class="col-sm-3 text-right">Heriot-Watt University</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Jan–Jun 2024</abbr>
    </div>
    <div class="col-sm-7">
      <div><strong>Teaching Assistant</strong></div>
      <div>Mentored robotics teams from software design and embedded programming to fully deployed physical systems</div>
    </div>
    <div class="col-sm-3 text-right">University of Edinburgh</div>
  </div>
</div>

<h3 style="margin-top: 3rem; margin-bottom: 0.5rem;">
  <b style="color:#4682B4"><i class="fa-solid fa-book-open"></i> publications</b>
</h3>
<div class="about-section">
{% include selected_papers.liquid %}
</div>

<h3 style="margin-top: 3rem; margin-bottom: 0.5rem;">
  <b style="color:#4682B4"><i class="fa-solid fa-award"></i> scholarships</b>
</h3>
<div class="about-section">
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">2022–2025</abbr>
    </div>
    <div class="col-sm-7">
      Fully Funded PhD Scholarship
    </div>
    <div class="col-sm-3 text-right">University of Edinburgh</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">May 2024</abbr>
    </div>
    <div class="col-sm-7">
      Verification Mentoring Workshop Scholarship
    </div>
    <div class="col-sm-3 text-right">CAV Conference</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Mar 2016</abbr>
    </div>
    <div class="col-sm-7">
      University Scholarship
    </div>
    <div class="col-sm-3 text-right">Xidian University</div>
  </div>
</div>

<h3 style="margin-top: 3rem; margin-bottom: 0.5rem;">
  <b style="color:#4682B4"><i class="fa-solid fa-network-wired"></i> service</b>
</h3>
<div class="about-section">
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Co-organizer</abbr>
    </div>
    <div class="col-sm-10">
      EuroProofNet Workshop on Theorem Proving in the Age of LLMs (2025)
    </div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Reviewer</abbr>
    </div>
    <div class="col-sm-10">
      TACAS (2025), EuroProofNet Workshop on Theorem Proving in the Age of LLMs (2025)
    </div>
  </div>
</div>

<h3 style="margin-top: 3rem; margin-bottom: 0.5rem;">
  <b style="color:#4682B4"><i class="fa-solid fa-chart-simple"></i> skills</b>
</h3>
<div class="about-section">
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Programming</abbr>
    </div>
    <div class="col-sm-7">
      Python, MATLAB, C/C++, Java, JavaScript
    </div>
    <div class="col-sm-3"></div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Languages</abbr>
    </div>
    <div class="col-sm-7">
      English, Mandarin, French, Japanese
    </div>
    <div class="col-sm-3"></div>
  </div>
</div>

<h3 style="margin-top: 3rem; margin-bottom: 0.5rem;">
  <b style="color:#4682B4"><i class="fa-solid fa-person-chalkboard"></i> talks & presentations</b>
</h3>
<div class="publications" style="margin-top: 0.5rem;">
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Dec 2025</abbr>
    </div>
    <div class="col-sm-7">
      European OpenHarmony Technical Forum
    </div>
    <div class="col-sm-3 text-right">Edinburgh, UK</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Sep 2025</abbr>
    </div>
    <div class="col-sm-7">
      Compilers Seminar
    </div>
    <div class="col-sm-3 text-right">University of Edinburgh</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Jun 2025</abbr>
    </div>
    <div class="col-sm-7">
      PLDI Conference
    </div>
    <div class="col-sm-3 text-right">Seoul, Korea</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Feb 2025</abbr>
    </div>
    <div class="col-sm-7">
      AAAI Conference
    </div>
    <div class="col-sm-3 text-right">Philadelphia, USA</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Nov 2024</abbr>
    </div>
    <div class="col-sm-7">
      Programming Languages Seminar
    </div>
    <div class="col-sm-3 text-right">University of Bristol</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Oct 2024</abbr>
    </div>
    <div class="col-sm-7">
      Compilers Seminar
    </div>
    <div class="col-sm-3 text-right">University of Edinburgh</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">May 2024</abbr>
    </div>
    <div class="col-sm-7">
      LAIV AI Verification Seminar
    </div>
    <div class="col-sm-3 text-right">Heriot-Watt University</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Mar 2024</abbr>
    </div>
    <div class="col-sm-7">
      EuroProofNet Workshop on Machine Learning in Proofs
    </div>
    <div class="col-sm-3 text-right">Vienna, Austria</div>
  </div>
  <div class="row" style="margin-bottom: 1rem;">
    <div class="col-sm-2 abbr">
      <abbr class="badge rounded w-100" style="background-color:#0072BB">Jul 2023</abbr>
    </div>
    <div class="col-sm-7">
      SYNT Workshop
    </div>
    <div class="col-sm-3 text-right">Paris, France</div>
  </div>
</div>
</div>
