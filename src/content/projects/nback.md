---
title: N-Back Trainer
domain: software
order: 12
blurb: Browser-based working-memory trainer with adaptive difficulty. Single, dual, triple, and quad N-back modes across position, audio, shape, and color streams. The hot path runs in Rust compiled to WebAssembly. A Bayesian particle filter with 500 particles tracks per-stream skill in real time and adjusts the N level to keep accuracy near the 80% target. Desktop builds via Tauri; persistent history through IndexedDB; audio cues via Piper TTS.
techStack: [Rust, WebAssembly, Tauri, IndexedDB, "Piper TTS", JavaScript]
image: /images/nback.png
imageAlt: NBack brain training game.
links:
  - label: nback.jesse-anderson.net
    url: https://nback.jesse-anderson.net
  - label: GitHub
    url: https://github.com/jesse-anderson/N-Back
---

Built around signal-detection theory: the particle filter models each stream's discrimination ability separately, so an audio-strong / position-weak player gets a different N level on each modality. The about page covers the protocol, the limits of n-back research (improvement on the task is robust; far transfer is contested), and how the adaptive system works.
