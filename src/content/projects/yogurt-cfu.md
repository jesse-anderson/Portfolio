---
title: Yogurt CFU/g Estimator
domain: cheme
order: 42
blurb: Fermentation-kinetics simulator for home and small-batch yogurt. Models S. thermophilus and L. bulgaricus co-culture growth with temperature-dependent rate constants, lag-plus-plateau kinetics, and pH feedback through a modified Gompertz acidification curve. Forecasts CFU/g and pH trajectory through fermentation and refrigerated post-acidification, with confidence envelopes anchored to published literature values.
techStack: [JavaScript, "Fermentation kinetics", "Gompertz model", "Microbial growth"]
image: /images/yogurt_cfu.png
imageAlt: Yogurt CFU evolution over time during fermentation.
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/yogurt-cfu-estimator.html
---

Two-species growth model with temperature, time, and inoculum size as primary inputs, plus advanced controls for lag, growth rate, and plateau parameters. Outputs CFU/g over time, pH trajectory, and a post-acidification envelope for cold storage. Anchored against published anchor curves rather than presented as a food-safety authority — the disclaimer matters.
