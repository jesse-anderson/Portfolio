---
title: xll-utils
domain: software
order: 24
blurb: Build-time tooling for the xll-rs ecosystem. Parses PE/COFF metadata from a compiled XLL and validates that the exported function set matches what Excel will accept at load time. Catches the "looks fine, won't load" class of bugs before they hit production.
techStack: [Rust, "PE/COFF", Excel, XLL]
links:
  - label: GitHub
    url: https://github.com/jesse-anderson/xll-utils
---

Sits between `cargo build` and Excel. Reads PE export tables out of the produced DLL and asserts the symbols match the registration block, so ABI mismatches surface as build errors instead of opaque "function not available" dialogs in Excel.
