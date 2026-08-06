---
title: Oral Multi-Dose PK Simulator
domain: pharma
order: 0
blurb: Pharmacokinetic simulator for oral dosing regimens. Single or repeated doses, first-order absorption and elimination, with concentration-time profiles and the standard PK metrics (Cmax, Tmax, AUC, half-life, accumulation ratio) computed live as parameters change. Monte Carlo simulation to simulate uncertainty in elimination kinetics.
techStack: [JavaScript, WebAssembly, Pharmacokinetics, "ODE solver"]
image: /images/oral_multidose.png
imageAlt: Image of the oral multidose calculator with the standard 3 cups of coffee.
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/oral-multidose.html
---

Bateman-equation-based one-compartment oral PK with adjustable dose, interval, ka, ke, and Vd. Tracks accumulation across repeated dosing and surfaces the standard PK summary metrics so you can sanity-check a regimen visually before reaching for a full PK package.
