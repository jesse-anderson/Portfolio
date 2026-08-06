---
title: Steam Tables Lookup
domain: cheme
order: 20
blurb: >-
  Water and steam property lookup across the saturation, compressed-liquid,
  superheated, and supercritical regions, with SI and US customary units,
  state comparison, phase context, and charts.
techStack: [JavaScript, Thermodynamics, "Steam tables"]
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/steam-tables.html
---

Vendored tables rather than a correlation fit, with the data source and its license named on the page. Pressure can be entered in kPa, MPa, bar, or atm, and the whole tool switches between SI and US customary units instead of asking the user to convert on the way in.

The page runs internal consistency tests across the vendored data and shows the results, so someone can see whether the tables agree with themselves before trusting a number out of them. Two states can be compared side by side, with phase context and charts around the lookup.
