---
title: tools.jesse-anderson.net
domain: software
order: 45
blurb: The home for the in-browser tools listed elsewhere on this page (graph digitizer, DBSCAN visualizer, AI image detector, HED calculator, toxicology body burden, oral multidose simulator) plus smaller utilities that did not warrant their own card. Static site, no backend, heavy compute via Rust compiled to WebAssembly.
techStack: [JavaScript, WebAssembly, Rust, "Cloudflare Pages"]
links:
  - label: tools.jesse-anderson.net
    url: https://tools.jesse-anderson.net
---

A consolidated surface for utilities that benefit from being a URL away. Each tool runs entirely in the browser; the heavier ones (DBSCAN visualizer, graph digitizer, AI image detector) compile through `wasm-bindgen` for performance.
