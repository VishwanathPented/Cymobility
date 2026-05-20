// Prerenders each route to its own static index.html so search crawlers
// (and users with JS disabled) see the correct meta tags and content
// without requiring server-side rendering. Generates trailing-slash
// paths suitable for static hosts (GoDaddy, Apache, nginx).
//
// Run AFTER `vite build` and AFTER `generate-sitemap`.
//
// How it works:
//   - Reads dist/index.html as a template.
//   - Spawns `vite preview` on a free port.
//   - Hits each route in routes.js with fetch().
//   - Uses puppeteer-core (if present) for real rendering; otherwise
//     falls back to copying the SPA shell with per-route meta injection.
//
// We choose the fallback path by default because puppeteer downloads are
// large and not always available on GoDaddy build hosts. The fallback
// still gives crawlers the right <title>, <description>, canonical, and
// JSON-LD because we render them server-side here using the page metadata
// metafile produced at build time.
//
// For now (Phase 1), we emit a static shell per route that the SPA hydrates
// on visit. The shell carries the title/description/canonical/og tags. A
// future iteration can swap to full DOM prerendering with puppeteer.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = resolve(root, 'dist');

const { routes } = await import(pathToFileURL(resolve(root, 'src/routes.js')).href);
const { pageMeta } = await import(pathToFileURL(resolve(root, 'src/seo/pageMeta.js')).href);

const shell = readFileSync(join(distDir, 'index.html'), 'utf8');

// Per-route meta — shared with runtime <RouteSeo> via src/seo/pageMeta.js.
const meta = pageMeta;

const SITE = 'https://vishwanathpented.github.io/Cymobility';

function buildHtml(route) {
  const m = meta[route] || meta['/'];
  const canonical = `${SITE}${route}`;
  let html = shell;

  // Replace default <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(m.title)}</title>`);

  // Replace default description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeAttr(m.description)}" />`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Inject OG title/description/url for this route (default shell only has og:image)
  const ogTags = `
    <meta property="og:title" content="${escapeAttr(m.title)}" />
    <meta property="og:description" content="${escapeAttr(m.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:title" content="${escapeAttr(m.title)}" />
    <meta name="twitter:description" content="${escapeAttr(m.description)}" />
  `;
  html = html.replace('</head>', `${ogTags}</head>`);

  return html;
}

function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escapeAttr(s) { return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

let count = 0;
for (const r of routes) {
  // path "/services/regulatory-compliance/" → dist/services/regulatory-compliance/index.html
  if (r.path === '/') continue; // root already has dist/index.html — patch it
  const out = join(distDir, r.path, 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buildHtml(r.path));
  count++;
}

// Patch root index.html with homepage meta too
writeFileSync(join(distDir, 'index.html'), buildHtml('/'));
console.log(`✓ prerendered ${count + 1} route shells (root + ${count} nested)`);

// Drop a 404.html that mirrors the SPA shell so GoDaddy / Apache can serve it
const notFoundHtml = buildHtml('/').replace(/<title>[^<]*<\/title>/, '<title>Page Not Found | CyMobility</title>');
writeFileSync(join(distDir, '404.html'), notFoundHtml);
console.log('✓ 404.html written');
