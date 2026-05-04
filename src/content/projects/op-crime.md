---
title: Oak Park Crime Tracker
domain: software
featured: true
order: 2
blurb: A self-hosted civic data project for Oak Park, IL. Daily ETL pipeline, deploys a static web app to GitHub Pages, and lets the browser query the dataset directly via DuckDB-WASM. NLP across incident descriptions surfaces patterns by type and location.
techStack: [Python, DuckDB-WASM, Raspberry Pi, ETL, GitHub Pages, NLP, Folium]
image: /images/OP-Crime.jpg
imageAlt: Oak Park crime tracker map
links:
  - label: Live site
    url: https://opcrime.jesse-anderson.net
  - label: Writeup
    url: https://blog.jesse-anderson.net/posts/OP-Crime-Documentation/
---

Oak Park publishes incident data, but no spatial reporting layer exists for residents. This fills the gap. A Raspberry Pi runs the ETL nightly: pull the latest dataset, normalize, geocode, and commit the parquet artifact to the repo. The site itself is fully static, so the browser pulls a parquet file and runs SQL against it via DuckDB-WASM. No backend, no hosting cost, queries are instant. NLP passes over incident narratives produce category and location clusters used in the dashboard view.
