// Generates dist/sitemap.xml from src/routes.js
// Run AFTER `vite build`.
import { writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Inline copy of routes — the source-of-truth /src/routes.js exports the same list.
const { routes } = await import(pathToFileURL(resolve(root, 'src/routes.js')).href);

const SITE = 'https://vishwanathpented.github.io/Cymobility';
const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq || 'monthly'}</changefreq>
    <priority>${(r.priority ?? 0.5).toFixed(2)}</priority>
  </url>`).join('\n')}
</urlset>
`;

const outDir = resolve(root, 'dist');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'sitemap.xml'), xml);
console.log(`✓ sitemap.xml written with ${routes.length} URLs`);

// Also write robots.txt to dist (overrides the public/ copy with the correct sitemap URL)
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
writeFileSync(resolve(outDir, 'robots.txt'), robots);
console.log('✓ robots.txt written');
