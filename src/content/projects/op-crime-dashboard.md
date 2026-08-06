---
title: Oak Park Crime Data Science Dashboard
domain: software
featured: true
order: 5
focus: Data Science
blurb: >-
  Analysis layer for the Oak Park crime dataset: temporal cohorts, weather
  and demographic context, topic discovery, semantic similarity, and
  Rust/Wasm browser-side search and scoring.
techStack: [Python, Rust, WebAssembly, React, TypeScript, Vite, BM25, UMAP, HDBSCAN, "BAAI/bge embeddings", Cloudflare]
image: /images/OP-Crime-Dashboard.png
imageAlt: Oak Park crime data science dashboard
links:
  - label: Live dashboard
    url: https://opcrimeds.jesse-anderson.net
  - label: Writeup
    url: https://blog.jesse-anderson.net/posts/OP-Crime-Dashboard-Doc/
---

The companion to the map. The map answers where incidents happened; the dashboard asks compared with what, through year-over-year deltas, seasonal patterns, holiday and weather cohorts, demographic context, and related incidents.

Narratives are encoded with `BAAI/bge-large-en-v1.5` at 1024 dimensions, reduced with UMAP, and clustered with HDBSCAN. UMAP replaced PCA because PCA did not preserve the neighborhood structure the topic view depends on, and HDBSCAN allows a noise label for incidents that belong to no group. Topic labels come from c-TF-IDF over the resulting groups.

Shipping 1024-dimensional float vectors to a browser is not viable, so they are quantized to int8. That preserves neighbor rankings closely enough for the similar-incident feature while cutting the payload from roughly 59 MB to about 15 MB.

Search is BM25 with k1 = 1.2 and b = 0.75. Query parsing, wildcard expansion, boolean operators, and scoring all run in Rust compiled to WebAssembly against a browser-loaded index, so a search never leaves the machine. Two WASM modules carry the heavier text and similarity work.

The build pipeline is Python enrichment feeding those Rust modules and a set of static artifacts, served as a Vite, TypeScript, and React single-page app on Cloudflare Pages, with the larger binaries in R2.

The dashboard publishes its own coverage, and labels its figures on the page as "descriptive dashboard counts, not risk estimates". The current build carries 22,222 valid incident rows out of 22,230 collected, a daily trend spanning 3,145 days from December 2017 once the sparse early archive is trimmed, 21,120 incidents assigned to an Oak Park zone against 1,102 (5.0 percent) that are not, and weather joined across 3,711 of 3,736 calendar days.
