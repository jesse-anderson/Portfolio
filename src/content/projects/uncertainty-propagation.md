---
title: Uncertainty Propagation Calculator
domain: software
order: 33
blurb: >-
  Propagates measurement error through an arbitrary formula using symbolic
  partial derivatives and a first-order Taylor expansion, with a per-variable
  contribution breakdown and an optional Monte Carlo cross-check.
techStack: [JavaScript, "AST parsing", "Symbolic differentiation", "Monte Carlo"]
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/uncertainty-propagation.html
---

Parses the entered formula into an AST, differentiates it symbolically with respect to each variable, and evaluates the standard first-order propagation. The contribution breakdown reports which input dominates the combined uncertainty, which is usually what someone actually needs before deciding where to spend effort on better measurements.

A first-order expansion is an approximation, so the tool will run the same formula through a Monte Carlo simulation (normal or uniform, up to 500,000 samples) as an independent check rather than asking the user to trust the analytical result. Coverage factors from k = 1 to k = 3 are selectable, and the page documents its own scope and limits.
