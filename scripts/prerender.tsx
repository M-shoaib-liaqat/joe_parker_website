// Build-time static prerender. Replaces the old react-snap/Puppeteer step, which
// required launching headless Chromium and reliably failed on Vercel's build
// image ("error while loading shared libraries: libnss3.so"). This uses plain
// react-dom/server + StaticRouter instead, so it has no native/browser dependency
// and cannot fail for environment reasons.
//
// Under React 19, <Helmet> renders real <title>/<meta>/<link>/<script> DOM nodes
// but react-helmet-async's SSR context is not populated (it relies on React's own
// head-hoisting, which only applies when actually rendering inside a <head>
// element). Since AppShell is rendered standalone (no <html>/<head> wrapper), those
// tags end up inline in the rendered string instead of being hoisted. We pull them
// back out here and splice them into the real document <head>.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import * as HelmetAsync from 'react-helmet-async';
const { HelmetProvider } = HelmetAsync;
import { AppShell } from '../App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/areas',
  '/gallery',
  '/service/eicr-certificates',
  '/service/emergency-electrician',
  '/service/domestic-electrician',
  '/service/commercial-electrician',
  '/service/ev-charger-installation',
  '/service/house-rewiring',
  '/electrical-services-essex',
  '/electrical-contractors-essex',
  '/electrician-harlow',
  '/electrician-chelmsford',
  '/electrician-basildon',
  '/electrician-brentwood',
  '/electrician-east-london',
  '/electrician-southend',
  '/electrician-grays',
  '/electrician-shoeburyness',
  '/electrician-rayleigh',
  '/electrician-braintree',
  '/electrician-tendring',
  '/electrician-colchester',
  '/electrician-tilbury',
  '/eicr-certificate-essex',
  '/house-rewire-essex',
  '/consumer-unit-replacement-essex',
  '/ev-charging-essex',
  '/emergency-electrician-essex',
];

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

function outputPathFor(route: string): string {
  if (route === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

// Pulls <title>/<meta>/<link>/<script type="application/ld+json"> tags that
// react-helmet-async emitted inline in the body, returning them separately from
// the remaining visible markup.
function extractHeadTags(html: string): { head: string; body: string } {
  const headParts: string[] = [];
  let body = html;

  const patterns = [
    /<title>[\s\S]*?<\/title>/g,
    /<meta\b[^>]*\/?>/g,
    /<link\b[^>]*\/?>/g,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
  ];

  for (const pattern of patterns) {
    body = body.replace(pattern, (match) => {
      headParts.push(match);
      return '';
    });
  }

  return { head: headParts.join('\n    '), body };
}

for (const route of ROUTES) {
  const rawHtml = ReactDOMServer.renderToString(
    React.createElement(
      HelmetProvider,
      null,
      React.createElement(StaticRouter, { location: route }, React.createElement(AppShell))
    )
  );

  const { head, body } = extractHeadTags(rawHtml);

  const html = template
    .replace(/<!--SEO_START-->[\s\S]*?<!--SEO_END-->/, `<!--SEO_START-->\n    ${head}\n    <!--SEO_END-->`)
    .replace('<!--SEO_SCHEMA_EXTRA-->', '')
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);

  const outPath = outputPathFor(route);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, html);
  console.log(`prerendered ${route} -> ${path.relative(distDir, outPath)}`);
}
