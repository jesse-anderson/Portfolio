---
title: Industrial IoT Sensor Network
domain: software
featured: true
order: 4
blurb: ESP32 nodes running SCD41 (CO₂, temperature, humidity) and PMS7003 (particulate matter) sensors, pushing telemetry over MQTT to redundant SQL backends. Local queueing keeps data intact through network or database outages. Multi-month deployments running on the original hardware.
techStack: [ESP32, MQTT, PostgreSQL, MongoDB, Python, SCD41, PMS7003, Raspberry Pi]
image: /images/Pi Sensor Flow Complete.png
imageAlt: Pi sensor network architecture diagram
links:
  - label: Build series
    url: https://blog.jesse-anderson.net/posts/Pi-Sensor-Proj-May-2024/
  - label: Part 2 (refinement)
    url: https://blog.jesse-anderson.net/posts/Pi-Sensor-Part-2/
  - label: ESP32 hardware writeup
    url: https://blog.jesse-anderson.net/posts/ESP32_Post_1/
  - label: SCD41 writeup
    url: https://blog.jesse-anderson.net/posts/SCD41/
  - label: PMS7003 writeup
    url: https://blog.jesse-anderson.net/posts/PMS7003/
---

Long-running indoor air-quality monitoring that survives the hostile parts of "real" deployment. Each ESP32 node owns its own sensors, batches readings, and publishes over MQTT. Subscribers on a Pi fan the stream into PostgreSQL and MongoDB simultaneously, so a single backend going down does not lose data. If the broker itself disappears, the node queues locally and replays on reconnect. The blog posts cover the soldering, firmware, schematic decisions, and what broke during the multi-month soak.
