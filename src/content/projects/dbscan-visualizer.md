---
title: DBSCAN Visualizer
domain: ml
order: 0
blurb: Interactive 2D/3D density-based clustering tool. Step-through animation of the DBSCAN algorithm, k-distance plots for parameter selection, and per-step state inspection. The clustering core is Rust compiled to WebAssembly and validated against scikit-learn's reference implementation point-for-point.
techStack: [Rust, WebAssembly, JavaScript, DBSCAN, "Three.js", "scikit-learn"]
image: /images/dbscan_visualizer.png
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/dbscan-visualizer.html
  - label: Original d3 educational version (writeup)
    url: https://blog.jesse-anderson.net/posts/DBSCAN/
  - label: OPTICS companion writeup
    url: https://blog.jesse-anderson.net/posts/OPTICSinPython/OPTICS.html
---

Successor to the d3 educational DBSCAN demo on the blog. The Rust core runs the same algorithm as scikit-learn (validated cluster-for-cluster on a battery of synthetic datasets) but exposes per-step state so the user can watch the algorithm walk the dataset. 3D mode lets you spin the result; the k-distance plot helps pick a sensible epsilon before clustering.
