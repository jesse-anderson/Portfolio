---
title: Private Job Intelligence Dashboard
domain: software
order: 12
blurb: >-
  Private job-search operations dashboard that turns public postings into a
  searchable, ranked workflow. Python ETL stores normalized postings in SQLite,
  exports static JSON, and publishes a TypeScript dashboard behind Cloudflare
  Access.
techStack: [Python, SQLite, TypeScript, Vite, Cloudflare, PowerShell]
---

A private data product for managing a job search without handing personal workflow state to a third-party app. The pipeline runs locally on a schedule, keeps a durable SQLite history, exports static dashboard data, ranks roles against a profile, and deploys the built site to Cloudflare Pages behind Cloudflare Access.

The public description is intentionally architecture-level: it covers the ETL, persistence, ranking, deployment, and browser-local saved/applied/notes workflow without naming target companies or exposing job-board implementation details.
