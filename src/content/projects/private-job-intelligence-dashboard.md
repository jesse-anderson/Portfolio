---
title: Private Job Intelligence Dashboard
domain: software
order: 46
blurb: >-
  Private job-market dashboard for turning public postings into a daily triage
  workflow. A local Python pipeline collects and normalizes listings into SQLite,
  exports static JSON, ranks roles against a profile, and publishes a
  TypeScript/Vite dashboard behind Cloudflare Access with saved/applied tracking,
  notes, and scrape-health monitoring.
techStack: [Python, SQLite, TypeScript, Vite, Cloudflare, PowerShell]
links:
  - label: Writeup
    url: https://blog.jesse-anderson.net/posts/Chicago_Job_Scraper/blog_draft_chicagoland_job_scraper
---

A private data product for managing a job search without handing personal workflow state to a third-party app. The pipeline runs locally on a schedule, keeps a durable SQLite history, exports static dashboard data, ranks roles against a profile, and deploys the built site to Cloudflare Pages behind Cloudflare Access.

The public description is intentionally architecture-level: it covers the ETL, persistence, ranking, deployment, and browser-local saved/applied/notes workflow without naming target companies or exposing job-board implementation details.



