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

Indoor air-quality monitoring built to survive the parts of deployment that actually break things. Each node owns its sensors and posts telemetry to several independent targets: Google Sheets on a 5-second interval, ThingSpeak and MongoDB on 15.

The ESP32 was chosen over a Pi Pico for arithmetic throughput, roughly 5x on integers and 60 to 70x on floating point, which matters once calibration curves run on-device. Its 520 KB of SRAM is the binding constraint. Posting to Google Sheets originally overflowed the receive buffer on the response, so that path was rewritten against lower-level sockets, and a Vercel endpoint was abandoned outright after it could not be made to fit in memory.

The failures that mattered were physical. The first build lost readings because a DHT11 would not hold contact against breadboard connections, so the assembly moved to soldered protoboard with the underside hot-glued for insulation. Power runs through an Adafruit Verter buck-boost module, which takes 3 to 12 V in and holds 5.2 V out at better than 90 percent efficiency across the usable range. A four-cell AA NiMH pack measured 28.2 hours of runtime, dropping to about 20 with the OLED lit.

Sensor selection went through several rounds: PMS5003 then PMS7003 for particulate, MH-Z19 then SCD41 for CO₂, DHT22 and BME680 for temperature, humidity, and pressure. The original hardware has stayed in multi-month deployment.
