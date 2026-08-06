---
title: Industrial IoT Sensor Network
domain: software
featured: true
order: 15
focus: Embedded Systems
blurb: Indoor air-quality monitors built around ESP32 nodes, SCD41 CO₂/temperature/humidity sensing, and PMS7003 particulate sensing. Readings are batched to multiple database/API targets; the original hardware has stayed in multi-month deployment.
techStack: [ESP32, "HTTP APIs", PostgreSQL, MongoDB, Python, SCD41, PMS7003, Raspberry Pi]
image: /images/pi-sensor-flow.png
imageAlt: Pi sensor network architecture diagram
links:
  - label: Build series
    url: https://blog.jesse-anderson.net/posts/Pi-Sensor-Proj-May-2024/
  - label: Part 2 (refinement)
    url: https://blog.jesse-anderson.net/posts/Pi-Sensor-Part-2/
  - label: ESP32 hardware writeup
    url: https://blog.jesse-anderson.net/posts/ESP32_Post_1/
  - label: Reliability and soldering writeup
    url: https://blog.jesse-anderson.net/posts/Soldering_ESP32/
  - label: SCD41 writeup
    url: https://blog.jesse-anderson.net/posts/SCD41/
  - label: PMS7003 writeup
    url: https://blog.jesse-anderson.net/posts/PMS7003/
---

Long-running indoor air-quality monitoring that survives the hostile parts of real deployment. Each ESP32 node owns its sensors, batches readings, and posts telemetry to multiple storage targets rather than depending on one service.

The deployed systems have run for months on the original hardware. The writeups cover firmware, sensor choices, soldering and power fixes, and the reliability issues that showed up once the monitor left the breadboard.
