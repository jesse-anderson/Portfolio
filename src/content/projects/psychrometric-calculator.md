---
title: Psychrometric Calculator
domain: cheme
order: 15
blurb: >-
  Moist-air property calculator with an interactive psychrometric chart.
  Computes wet-bulb, dew point, humidity ratio, enthalpy, and specific volume
  from ASHRAE equations, and draws standard HVAC processes on the chart.
techStack: [JavaScript, PsychroLib, ASHRAE, Canvas]
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/psychrometric-calculator.html
---

Built on PsychroLib for the ASHRAE property equations, with charting, process modeling, validation, and export split into separate modules. State is entered as dry-bulb plus relative humidity, with either atmospheric pressure or altitude closing the system.

Processes are drawn on the chart: sensible heating and cooling, cooling with dehumidification, humidification, mixing two air streams, and a coil-leaving estimate. Saturation, RH lines, wet-bulb, enthalpy and specific-volume overlays, and a comfort zone each toggle independently.
