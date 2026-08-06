---
title: Parquet Viewer
domain: software
order: 31
blurb: >-
  Inspects Parquet files locally in the browser: schema, row-group and
  per-column compression statistics, footer metadata, and a paginated data
  preview. Nothing is uploaded, and decoders load on demand.
techStack: [JavaScript, hyparquet, Parquet, Snappy, zstd]
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/parquet-viewer.html
---

Parquet is the artifact format most of the data work here produces, and checking one normally means opening Python. This reads the footer directly through hyparquet and reports what matters when a file looks wrong: how the row groups are laid out, which codec each column uses, and what the column statistics claim about ranges and null counts.

Compression codecs are fetched lazily and cached rather than bundled up front, so a file that only needs Snappy never pays the download cost for zstd, gzip, and brotli. The file never leaves the browser.
