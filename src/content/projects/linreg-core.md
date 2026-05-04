---
title: linreg-core
domain: software
featured: true
order: 1
blurb: A Rust regression library (OLS, WLS, Ridge, Lasso) with full diagnostics, published to crates.io. The same numerical core ships to browsers via wasm-bindgen, to Python via PyO3, and to Excel/VBA through an FFI dll. Validated against R and Python references.
techStack: [Rust, WebAssembly, PyO3, wasm-bindgen, FFI, VBA, Python]
image: /images/linreg_core.png
imageAlt: Linreg-core LOESS fitting.
links:
  - label: Live WASM Demo
    url: https://jesse-anderson.net/linreg-core/linear-regression.html
  - label: crates.io
    url: https://crates.io/crates/linreg-core
  - label: Writeup (Rust → VBA FFI)
    url: https://blog.jesse-anderson.net/posts/linreg_core_VBA_FFI/
  - label: Cargo-generate template writeup
    url: https://blog.jesse-anderson.net/posts/XLLGen_Cargo_Generate/Rust_XLLGen_Template_Tutorial.html
---

Cross-language regression library written once in Rust and exposed everywhere it needed to run. The core implements ordinary, weighted, ridge, and lasso regression with the diagnostics you would actually want at a fit site (residual standard error, R², adjusted R², t-stats, F-stat, leverage, Cook's distance). Three bindings ride on top: WASM for browser-side fits in the engineering tools site, PyO3 for notebooks, and a small FFI dll callable from VBA so legacy Excel workflows can leave Solver behind. Output is validated against R and `statsmodels` to match expected coefficients and standard errors within numerical tolerance.
