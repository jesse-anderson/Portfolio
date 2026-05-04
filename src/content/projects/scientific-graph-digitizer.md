---
title: Scientific Graph Digitizer
domain: software
order: 13
blurb: Measure bar heights, marker positions, and curve points directly off rasterized scientific figures or PDFs without redrawing the chart. Crop to ROI, drop a baseline, place an axis tick, and the tool computes percent-of-control or absolute values across treatments. Started life as a Python/Tkinter desktop tool; the in-browser successor is faster and more featured.
techStack: [JavaScript, WebAssembly, Canvas, Python, Tkinter, Pillow]
image: images/sci_graph_compare.png
imageAlt: Scientific graph comparison tool screenshot showing Pre creatine post creatine difference.
links:
  - label: Live (web version)
    url: https://tools.jesse-anderson.net/tools/scientific-graph-digitizer.html
  - label: GitHub (Python original)
    url: https://github.com/jesse-anderson/Scientific_Paper_Graph_Comparison_Tool
---

Built because eyeballing bar heights off a published figure to estimate effect sizes was annoying often enough that automating it paid off. The web version handles images and PDFs, supports multi-region calibration, exports annotated PNG and CSV, and runs entirely client-side. The original Python desktop tool (Tkinter, Pillow, MSS for screen capture) is still on GitHub as the reference implementation.
