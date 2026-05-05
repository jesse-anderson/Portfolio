---
title: Oak Park Crime Data Science Dashboard
domain: software
featured: true
order: 10
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

The original map answers where incidents happened. The dashboard asks compared with what: year-over-year deltas, seasonal patterns, holiday and weather cohorts, demographic context, and related incidents.

ETL produces Parquet and JSON artifacts for a Vite/React app. A Rust core compiled to WebAssembly handles BM25 search, similarity scoring, and embedding lookups client-side. Topic discovery uses BAAI/bge embeddings, UMAP, HDBSCAN, and c-TF-IDF labels, with larger binary artifacts hosted on Cloudflare R2.
