---
title: linreg-core
domain: software
featured: true
order: 0
focus: Numerical Computing
blurb: A Rust regression core that ships to the browser, Python, and Excel/VBA from one implementation. Published on crates.io, exposed through Wasm/PyO3/FFI, and validated against R and Python outputs.
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

Built to replace one-off spreadsheet and notebook regression code with a single tested numerical core. It implements ordinary, weighted, ridge, and lasso regression plus fit diagnostics: residual standard error, R², adjusted R², t-stats, F-stat, leverage, and Cook's distance.

The same core runs browser-side through `wasm-bindgen`, in notebooks through PyO3, and in legacy Excel workflows through a small FFI dll callable from VBA. Outputs are checked against R and `statsmodels` coefficients and standard errors within numerical tolerance.
