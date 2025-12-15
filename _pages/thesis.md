---
layout: page
title: "Thesis"
permalink: /thesis/
citation:
  title: "Large Language Model Enabled Program Synthesis"
  author: "Yixuan Li"
  publication_date: "2025/01/01"
  institution: "University of Edinburgh"
  pdf_url: "/pdf/LiY_2025.pdf"
  keywords: "large language models; program synthesis; formal methods"
  abstract: ""
---

## Large Language Model Enabled Program Synthesis

- **Author**: Yixuan Li
- **Degree**: PhD (Doctor of Philosophy), Computer Science
- **Institution**: University of Edinburgh (School of Informatics)
- **Year**: 2025

[Download the thesis (PDF)](/pdf/LiY_2025.pdf)

### Abstract

Program synthesis aims to automate the construction of programs that satisfy user-defined specifications, yet existing approaches face trade-offs between correctness, scalability, and efficiency. One established approach is syntax-guided synthesis (SyGuS), in which the user provides both a formal specification of the desired program behaviour and a syntactic template, typically expressed as a context-free grammar. However, it becomes computationally expensive as the grammar grows and the number of possible programs increases.In contrast, machine learning methods, including large language models (LLMs), can generate code quickly by learning patterns from large datasets, but they often produce incorrect or unverifiable programs. 

This thesis presents two complementary lines of research for integrating large language models (LLMs) into program synthesis. The first develops prompt engineering techniques to automatically select the most effective prompt-LLM configuration for a given synthesis task. The second investigates hybrid synthesis methods that combine the correctness guarantees of classical SyGuS techniques with the speed and generalisation capabilities of LLMs. This thesis further demonstrates the applicability of hybrid synthesis methods to domain-specific program lifting, where translating low-level code into high-level representations is essential for machine learning workloads. Together, these contributions advance the development of program synthesis frameworks that are both principled and practical.


