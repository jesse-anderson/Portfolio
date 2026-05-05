---
title: xll-rs
domain: software
order: 9
blurb: Rust runtime and support library for building native Excel XLL add-ins on Windows. Ships typed Rust functions as Excel cell formulas without ever touching the C XLL SDK, an import library, or a C compiler. Sits underneath `linreg-core`'s VBA/XLL bindings as the actual interop layer.
techStack: [Rust, Excel, XLL, Windows, FFI]
links:
  - label: GitHub
    url: https://github.com/jesse-anderson/xll-rs
  - label: Writeup
    url: https://blog.jesse-anderson.net/posts/linreg_core_XLL/
---

Pure-Rust path from `cargo build` to a working XLL add-in. Handles the Excel C API marshalling, function registration, and the calling-convention quirks that make XLL development painful in the first place. Companion to `xllgen` (which scaffolds projects) and `xll-utils` (which validates exports).
