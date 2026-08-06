---
title: PID Playground
domain: cheme
order: 12
blurb: >-
  FOPDT process with a parallel-form PID controller: exact zero-order-hold
  discretization, fractional dead time, derivative filtering, and selectable
  anti-windup. Ziegler-Nichols, Cohen-Coon, AMIGO, and lambda tuning rules run
  against the same process so their results can be compared directly.
techStack: [JavaScript, "Process control", FOPDT, "PID tuning", "Numerical simulation"]
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/pid-playground.html
---

Built while reviewing control theory, on the principle that implementing something is a better way to learn it than reading about it. Running four tuning rules against one process makes their trade-offs visible in a way the individual formulas do not.

The simulation keeps the controller sample time separate from the integration step, so sampling effects show up rather than being smoothed away. Anti-windup is switchable between conditional clamping and back-calculation, and the derivative term can act on measurement or on error. Five preset processes cover normalized FOPDT, fast flow, a jacketed tank, a heat exchanger, and composition control, each with load disturbances and measurement noise. Plots cover the process variable, controller output, and open-loop frequency response.

The guided exercises and the shift-click glossary exist because the tool was built to be studied from rather than to tune a live loop.
