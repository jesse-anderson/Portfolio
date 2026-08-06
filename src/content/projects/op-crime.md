---
title: Oak Park Crime Data Pipeline & Map
domain: software
featured: true
order: 0
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

Oak Park publishes incident data as PDF bulletins, which is not a format residents can ask questions of. The pipeline runs twice a day: pull new bulletins, extract text with pdfplumber under tight layout tolerances, normalize headers, split complaint blocks with lookahead regex, geocode, assign zones, and publish Parquet and DuckDB artifacts. The dataset now runs past 22,000 incidents reaching back to December 2017.

The first parser was built on PyPDF2 and lost an estimated 10 to 20 percent of complaints to layout artifacts. The rewrite is evaluated against a held-out set of 50 PDFs covering 369 complaints, where it currently scores 100 percent recall and precision on complaint extraction and on every parsed field, with no cascade failures.

Geocoding follows a flag-don't-fix policy. Anything landing outside the village boundary, or carrying an unparseable date, year drift, or a missing field, raises a review flag instead of being silently corrected, because silent correction would hide exactly the records worth checking. The published build reports its own gaps rather than papering over them: 8 of 22,230 source rows dropped as unusable, 1,102 incidents (5.0 percent) that do not fall inside a mapped Oak Park zone, and 60 with no recoverable timestamp.

The app itself is static, with no query API in the production path: the browser downloads the dataset and runs SQL locally through DuckDB-WASM. Reworking the artifact layout cut the initial map payload from 2,020 KB to 445 KB and the full map load query from 92.3 ms to 51.0 ms. A two-table split keeps the map layer at 14 fields and defers a 6-field detail table until a record is opened. Caching is tiered by how often each thing changes: 11 hours on the data, a year on the DuckDB runtime, and an LRU cap on map tiles. Code is MIT, data is CC BY 4.0. NLP passes over the narratives feed the companion dashboard.
