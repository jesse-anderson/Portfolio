---
title: VAE-GAN on MNIST
domain: ml
order: 22
blurb: A walk through training a Variational Autoencoder Generative Adversarial Network on MNIST, with a Denoising Autoencoder, plain VAE, and plain GAN built first as comparison points.
techStack: [Python, PyTorch, VAE, GAN, Autoencoders]
image: /images/GANOutput.png
imageAlt: GAN generated MNIST digits
links:
  - label: Writeup
    url: https://blog.jesse-anderson.net/posts/VAE_GAN/VAEGAN.html
---

Built each component piece by piece (DAE → VAE → GAN → VAE-GAN) so the trade-offs of the combined architecture are visible against simpler baselines. Code, training curves, and output samples are all in the writeup.
