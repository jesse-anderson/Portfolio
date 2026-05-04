/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0f172a',
          muted: '#475569',
          subtle: '#64748b',
        },
        paper: {
          DEFAULT: '#ffffff',
          alt: '#f8fafc',
        },
        accent: {
          DEFAULT: '#0369a1',
          hover: '#075985',
        },
      },
      maxWidth: {
        prose: '68ch',
        page: '72rem',
      },
    },
  },
  plugins: [],
};
