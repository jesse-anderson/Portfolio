---
title: Python Clustering Toolbox
domain: ml
order: 23
blurb: A small GUI for running Ripley's K/L, DBSCAN, and OPTICS on point data. Built originally for single-molecule localization microscopy work; useful anywhere you have 2D points and want to ask spatial-statistics questions about them.
techStack: [Python, scikit-learn, DBSCAN, OPTICS, Ripley's K]
image: /images/pythonClustering.JPG
imageAlt: Python clustering toolbox GUI
links:
  - label: GitHub
    url: https://github.com/jesse-anderson/Python/tree/main/Cluster-Analysis-with-GUI
  - label: OPTICS writeup
    url: https://blog.jesse-anderson.net/posts/OPTICSinPython/OPTICS.html
---

A teaching-and-research GUI: load points, pick an algorithm, sweep parameters. Wraps scikit-learn for DBSCAN and OPTICS, plus a custom Ripley's K/L implementation for spatial-statistics work.
