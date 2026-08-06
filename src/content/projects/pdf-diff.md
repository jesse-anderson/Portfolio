---
title: PDF Diff Checker
domain: software
order: 32
blurb: >-
  Compares two multi-page PDFs with semantic text diffing, in-place
  highlighting, change navigation, and a visual pixel diff. Word or character
  granularity, ignore-case and page-break options, and TXT or JSON reports.
techStack: [JavaScript, "pdf.js", diff-match-patch, Canvas]
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/pdf-diff.html
---

The browser version of a problem I automated at UL Solutions, where detecting changes between CAD revisions ran on Python, OpenCV, and PyMuPDF. Here pdf.js extracts the text layer, diff-match-patch produces the edit script, and the result is painted back onto the rendered page so a reviewer sees each change in position on the page.

A pixel diff runs alongside the text diff to catch what the text layer misses, such as moved graphics or redrawn tables. The pdf.js build is pinned and loaded from its own file, which lets the page serve a content security policy without `unsafe-inline`.
