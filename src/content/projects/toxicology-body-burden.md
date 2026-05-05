---
title: Toxicology Body Burden
domain: pharma
order: 10
blurb: Estimates total systemic load of a substance from a measured plasma concentration using volume-of-distribution models, with optional kinetic back-calculation to estimate exposure history.
techStack: [JavaScript, Pharmacology, Toxicology, "Vd modeling"]
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/toxicology-and-body-burden.html
---

Forward calculation: plasma concentration × Vd → total body load. Back-calculation: starting from a current measurement and a known elimination rate, work backwards to estimate the exposure that produced it. Useful for occupational and environmental exposure modeling where the dose is unknown but the biomarker is measured.
