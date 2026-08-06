---
title: AI Image Detector
domain: ml
order: 5
blurb: Frequency-domain analysis tool for distinguishing AI-generated images from photographs. Computes 2D FFTs of image patches and visualizes the noise spectrum; AI-generated images carry characteristic high-frequency signatures that diffusion-model post-processing does not fully erase.
techStack: [JavaScript, WebAssembly, FFT, Canvas]
image: /images/AI_Image_Detector_FFT.png
imageAlt: AI Image detector showing a scanned image and the resulting power / polar spectrum, the azimuthal sum, and the radial falloff.
links:
  - label: Live tool
    url: https://tools.jesse-anderson.net/tools/ai-image-detector.html
---

Drop in an image, get back its FFT and a per-region noise profile. Real photographs typically show smoothly distributed high-frequency content from sensor noise; many AI-generated images show banding, drop-offs, or unnaturally clean spectra. Not a definitive classifier — the world doesn't have one — but a fast first-pass forensic tool.
