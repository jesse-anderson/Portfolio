// Regenerates the static brand assets: favicon.ico, the PNG icons, and the
// 1200x630 OpenGraph card. Run `npm run assets` after changing the role,
// bio line, or highlights in src/data/profile.ts, then commit the output.
// sharp comes in with Astro; there is no extra dependency to install.
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');
const LOGO = join(PUBLIC, 'images/logo.png');

const INK = '#0f172a';
const INK_MUTED = '#475569';
const INK_SUBTLE = '#64748b';
const PAPER = '#ffffff';
const ACCENT = '#0369a1';

// ---------- favicon.ico ----------
// Square-pad the tall flask logo, then pack PNGs into an ICO container.
async function squarePng(size) {
  const pad = Math.round(size * 0.12);
  const inner = size - pad * 2;
  const logo = await sharp(LOGO)
    .resize(inner, inner, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    },
  })
    .composite([{ input: logo, top: pad, left: pad }])
    .png()
    .toBuffer();
}

function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + 16 * entries.length;
  entries.forEach((e, i) => {
    const b = 16 * i;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 0); // width
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 1); // height
    dir.writeUInt8(0, b + 2); // palette
    dir.writeUInt8(0, b + 3); // reserved
    dir.writeUInt16LE(1, b + 4); // color planes
    dir.writeUInt16LE(32, b + 6); // bits per pixel
    dir.writeUInt32LE(e.data.length, b + 8);
    dir.writeUInt32LE(offset, b + 12);
    offset += e.data.length;
  });

  return Buffer.concat([header, dir, ...entries.map((e) => e.data)]);
}

async function makeFavicon() {
  const sizes = [16, 32, 48];
  const entries = [];
  for (const size of sizes) {
    entries.push({ size, data: await squarePng(size) });
  }
  writeFileSync(join(PUBLIC, 'favicon.ico'), buildIco(entries));

  // Also a crisp PNG for modern browsers / Apple touch icon.
  writeFileSync(join(PUBLIC, 'images/icon-192.png'), await squarePng(192));
  writeFileSync(join(PUBLIC, 'images/apple-touch-icon.png'), await squarePng(180));
  console.log('favicon.ico + icon PNGs written');
}

// ---------- og.png ----------
const FONT = "Inter, 'Segoe UI', Helvetica, Arial, sans-serif";

const highlights = [
  ['3000+', 'labor-hours automated'],
  ['6', 'peer-reviewed publications'],
  ['Rust \u2192 Wasm', 'systems in the browser'],
];

async function makeOg() {
  const logo = await sharp(LOGO)
    .resize(110, 110, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer();

  const stats = highlights
    .map(([value, label], i) => {
      const x = 72 + i * 360;
      return `
        <text x="${x}" y="492" font-family="${FONT}" font-size="34" font-weight="600" fill="${INK}">${value}</text>
        <text x="${x}" y="528" font-family="${FONT}" font-size="21" fill="${INK_SUBTLE}">${label}</text>`;
    })
    .join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect width="1200" height="8" fill="${ACCENT}"/>
  <text x="72" y="150" font-family="${FONT}" font-size="24" font-weight="500"
        letter-spacing="4.5" fill="${INK_SUBTLE}">DATA SYSTEMS &amp; AUTOMATION ENGINEER</text>
  <text x="72" y="256" font-family="${FONT}" font-size="94" font-weight="600"
        letter-spacing="-2" fill="${INK}">Jesse Anderson</text>
  <text x="72" y="330" font-family="${FONT}" font-size="30" fill="${INK_MUTED}">Pipelines, dashboards, IoT sensor networks, and the</text>
  <text x="72" y="374" font-family="${FONT}" font-size="30" fill="${INK_MUTED}">scripting that ties workflows together.</text>
  <line x1="72" y1="428" x2="1128" y2="428" stroke="${INK}" stroke-opacity="0.12" stroke-width="1.5"/>
  ${stats}
  <text x="72" y="586" font-family="${FONT}" font-size="22" fill="${INK_SUBTLE}">portfolio.jesse-anderson.net</text>
</svg>`;

  await sharp(Buffer.from(svg))
    .composite([{ input: logo, top: 60, left: 1018 }])
    .png()
    .toFile(join(PUBLIC, 'images/og-card.png'));
  console.log('og-card.png written');
}

await makeFavicon();
await makeOg();
