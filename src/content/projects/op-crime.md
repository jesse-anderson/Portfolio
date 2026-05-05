---
title: Oak Park Crime Data Pipeline & Map
domain: software
featured: true
order: 5
focus: Data Engineering
blurb: >-
  Nightly Raspberry Pi ETL for Oak Park incident reports: ingest public data,
  normalize fields, geocode incidents, publish Parquet, and serve a static map
  queried locally with DuckDB-WASM.
techStack: [Python, DuckDB-WASM, Raspberry Pi, ETL, GitHub Pages, NLP, Folium]
image: /images/OP-Crime-Map.jpg
imageAlt: Oak Park crime tracker map
links:
  - label: Live site
    url: https://opcrime.jesse-anderson.net
  - label: Writeup
    url: https://blog.jesse-anderson.net/posts/OP-Crime-Documentation/
---

Oak Park publishes incident data, but residents do not get a useful spatial reporting layer. This fills that gap without a server: nightly ETL pulls the latest source data, normalizes fields, geocodes incidents, and publishes a Parquet artifact.

The app itself is static. The browser downloads the dataset and runs SQL locally through DuckDB-WASM, so hosting stays simple and cheap while still supporting fast map filtering and exploration. NLP passes over incident narratives feed the companion dashboard.
