---
title: Private Classic Forum
domain: software
order: 26
blurb: >-
  Private, invite-only discussion board for a small trusted group, hosted
  entirely on Cloudflare: React/Vite SPA, Hono API on Workers, D1 (SQLite)
  with FTS5 full-text search, R2 media storage, and Cloudflare Access for
  auth. Serves real users and real data within a $0-5/month budget.
techStack: [TypeScript, React, Vite, Hono, Cloudflare Workers, D1 (SQLite), R2, Cloudflare Access]
---

A classic categories, threads, and replies forum built as a monorepo with a Worker API, a React SPA, and shared types. Cloudflare Access terminates identity at the edge and hands the Worker a signed JWT, so the app never handles passwords. Features include Markdown authoring, thread polls, full-text search, reactions, mentions, subscriptions, unread tracking, drafts, bookmarks, edit history, a report queue with role-based moderation, per-user write quotas, and encrypted backups with tested restore tooling.

Most of the work after launch went into keeping a free-tier edge app fast and correct. D1 bills by rows read rather than rows returned, and Workers cap subrequests per invocation, so query shape, caching, and what runs in parallel are all designed around those limits.
