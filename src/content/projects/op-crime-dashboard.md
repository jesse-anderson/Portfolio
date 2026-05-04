---
title: Oak Park Crime — Data Science Dashboard
domain: software
featured: true
order: 3
blurb: Companion to the crime map. The map answers "where did incidents happen?"; the dashboard answers "compared with what?" — year-over-year comparisons, seasonal and holiday patterns, weather cohorts, narrative topic discovery, zone-level demographic context, and semantic incident similarity. Heavy compute (BM25 search, similarity scoring) runs in the browser via Rust compiled to WebAssembly.
techStack: [Python, Rust, WebAssembly, React, TypeScript, Vite, BM25, UMAP, HDBSCAN, "BAAI/bge embeddings", Cloudflare]
image: /images/OP-Crime.jpg
imageAlt: Oak Park crime data science dashboard
links:
  - label: Live dashboard
    url: https://opcrimeds.jesse-anderson.net
  - label: Writeup
    url: https://blog.jesse-anderson.net/posts/OP-Crime-Dashboard-Doc/
---

Where the original map invited location bias ("look at my neighborhood"), the dashboard forces real comparison. ETL produces parquet and JSON artifacts; a Vite/React app renders them; a Rust core compiled to WebAssembly handles BM25 search, similarity scoring, and embedding lookups client-side. Topic discovery uses BAAI/bge embeddings, UMAP for projection, and HDBSCAN for clustering, with c-TF-IDF for label generation. Census ACS data overlays demographic context per zone. Hosted on Cloudflare Pages with R2 for the larger binary artifacts.
