// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { join } from "node:path";

/**
 * Workaround: TanStack Start's prerender preview server looks for
 * dist/server/server.js, but Nitro outputs dist/server/index.mjs.
 * This plugin creates a server.js shim after the Nitro build so
 * prerender can load the server entry, then restructures dist/ for
 * static hosting (dist/index.html + dist/assets + dist/favicon.ico).
 */
function staticPrerenderServerShim() {
  return {
    name: "static-prerender-server-shim",
    apply: "build",
    closeBundle: {
      order: "post",
      handler() {
        const cwd = process.cwd();
        const distDir = join(cwd, "dist");
        const clientDir = join(distDir, "client");
        const serverDir = join(distDir, "server");

        // 1. Create a server.js shim so the prerender preview server can
        //    load the Cloudflare worker entry in Node.js.
        const indexPath = join(serverDir, "index.mjs");
        const shimPath = join(serverDir, "server.js");
        if (existsSync(indexPath) && !existsSync(shimPath)) {
          writeFileSync(
            shimPath,
            `import cloudflareHandler from "./index.mjs";\n` +
              `const mockEnv = {};\n` +
              `const mockContext = {\n` +
              `  waitUntil: () => {},\n` +
              `  passThroughOnException: () => {},\n` +
              `};\n` +
              `function toMutableRequest(req) {\n` +
              `  const headers = Object.fromEntries(req.headers.entries());\n` +
              `  const mutable = new Request(req.url, {\n` +
              `    method: req.method,\n` +
              `    headers,\n` +
              `    body: req.body,\n` +
              `  });\n` +
              `  return mutable;\n` +
              `}\n` +
              `export default {\n` +
              `  fetch(request) {\n` +
              `    return cloudflareHandler.fetch(\n` +
              `      toMutableRequest(request),\n` +
              `      mockEnv,\n` +
              `      mockContext,\n` +
              `    );\n` +
              `  },\n` +
              `};\n`,
          );
        }

        // 2. Restructure dist/ for static hosting once prerender is done.
        //    Use buildEnd so it runs after the TanStack Start prerender writes
        //    dist/client/index.html.
        this.environment.buildEnd = {
          order: "post",
          handler() {
            console.log("[static-shim] buildEnd — restructuring dist/");
            if (
              existsSync(clientDir) &&
              existsSync(join(clientDir, "index.html"))
            ) {
              // Move assets to dist/assets
              const assetsDir = join(clientDir, "assets");
              const distAssetsDir = join(distDir, "assets");
              if (existsSync(assetsDir) && !existsSync(distAssetsDir)) {
                mkdirSync(distAssetsDir, { recursive: true });
                for (const entry of readdirSync(assetsDir)) {
                  renameSync(
                    join(assetsDir, entry),
                    join(distAssetsDir, entry),
                  );
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
              console.log("[static-shim] dist/ restructured for static hosting");
            } else {
              console.log("[static-shim] dist/client/index.html not found, skipping restructure");
            }
          },
        };
      },
    },
  };
}

export default defineConfig({
  vite: {
    plugins: [staticPrerenderServerShim()],
  },
  tanstackStart: {
    // Generate static HTML files for static hosting (dist/index.html + assets).
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,
      crawlLinks: true,
      failOnError: true,
    },
  },
});
