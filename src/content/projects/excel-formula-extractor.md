---
title: Excel Formula Extractor
domain: software
order: 34
blurb: >-
  Pulls every formula, defined name, hidden sheet, and external workbook
  reference out of an Excel file in the browser, with search and an
  external-references-only filter. Parsing runs client-side through SheetJS.
techStack: [JavaScript, SheetJS, Excel, "Formula auditing"]
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/excel-formula-extractor.html
---

Auditing an inherited workbook usually means clicking through sheets hunting for whatever breaks. This extracts the whole formula surface at once: formula cells per sheet, defined names, hidden sheets, and links out to other workbooks, which is the set that tends to matter before a migration or a rewrite.

The external-references view exists because cross-workbook links are the ones that silently break when files move. The output states its own boundaries for workbook features the current version does not cover.
