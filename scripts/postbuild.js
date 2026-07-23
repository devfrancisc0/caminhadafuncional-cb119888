/**
 * Post-build step for static hosting.
 *
 * TanStack Start + Nitro place the prerendered index.html and assets under
 * dist/client/. This script moves them to the dist/ root so the folder can be
 * uploaded to any static host (Netlify, Vercel, Cloudflare Pages, etc.).
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
} from "node:fs";
import { join } from "node:path";

const cwd = process.cwd();
const distDir = join(cwd, "dist");
const clientDir = join(distDir, "client");

if (!existsSync(clientDir)) {
  console.log("[postbuild] dist/client not found, nothing to restructure");
  process.exit(0);
}

if (!existsSync(join(clientDir, "index.html"))) {
  console.log("[postbuild] dist/client/index.html not found, skipping");
  process.exit(0);
}

console.log("[postbuild] restructuring dist/ for static hosting...");

// Move assets to dist/assets
const assetsDir = join(clientDir, "assets");
const distAssetsDir = join(distDir, "assets");
if (existsSync(assetsDir) && !existsSync(distAssetsDir)) {
  mkdirSync(distAssetsDir, { recursive: true });
  for (const entry of readdirSync(assetsDir)) {
    renameSync(join(assetsDir, entry), join(distAssetsDir, entry));
  }
  rmSync(assetsDir, { recursive: true, force: true });
}

// Move favicon
const faviconSrc = join(clientDir, "favicon.ico");
const faviconDst = join(distDir, "favicon.ico");
if (existsSync(faviconSrc) && !existsSync(faviconDst)) {
  renameSync(faviconSrc, faviconDst);
}

// Move index.html to dist root
const indexSrc = join(clientDir, "index.html");
const indexDst = join(distDir, "index.html");
if (existsSync(indexSrc) && !existsSync(indexDst)) {
  renameSync(indexSrc, indexDst);
}

// Remove now-empty client directory
if (existsSync(clientDir)) {
  rmSync(clientDir, { recursive: true, force: true });
}

console.log("[postbuild] dist/ ready for static hosting");
