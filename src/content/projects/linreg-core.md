---
title: linreg-core
domain: software
featured: true
order: 10
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

One numerical core, three delivery targets, written to replace the one-off regression code that otherwise accumulates across spreadsheets and notebooks. The crate implements OLS, weighted least squares, ridge, lasso, elastic net, and polynomial regression, and exposes 27 worksheet functions spanning regression, diagnostics, cross-validation, prediction intervals, and lambda path. The diagnostics are the part usually skipped: Breusch-Pagan, White, Jarque-Bera, Shapiro-Wilk, Durbin-Watson, Breusch-Godfrey, VIF, Cook's distance, DFFITS, and DFBETAS among them.

The same core compiles to WebAssembly through `wasm-bindgen` for the browser, to a Python extension through PyO3, and to a native XLL add-in for Excel. Excel is the awkward target. Around 590 lines carry type definitions, callback resolution, registration, and XLOPER12 conversion, and every returned string or array has to set `xlbitDLLFree` and be released through `xlAutoFree12`, or the add-in leaks on every call. The XLL build takes zero third-party dependencies and links only against system DLLs present on Windows 8 and later, so installing it is copying one file.

Correctness is enforced by 165 automated tests across nine files, weighted toward diagnostics (42) and regularized regression (32), with coefficients and standard errors checked against R and `statsmodels` within numerical tolerance. Memory behavior is tested separately, running 500 iterations per test with heap tracking through the Win32 process-memory API, because a leak in an Excel UDF surfaces as slow degradation across a session rather than an obvious crash.

The scaffolding around it became its own projects: `xll-rs` for the Excel C API layer and `xll-utils` for validating that exported symbols match the registration block.
