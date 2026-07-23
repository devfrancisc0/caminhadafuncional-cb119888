// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Workaround: TanStack Start's prerender preview server looks for
 * dist/server/server.js, but Nitro outputs dist/server/index.mjs.
 * This plugin creates a server.js shim after the Nitro build so
 * prerender can load the server entry.
 */
function staticPrerenderServerShim() {
  return {
    name: "static-prerender-server-shim",
    apply: "build",
    closeBundle: {
      order: "post",
      handler() {
        const serverDir = join(process.cwd(), "dist", "server");
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
              `export default {\n` +
              `  fetch(request) {\n` +
              `    return cloudflareHandler.fetch(request, mockEnv, mockContext);\n` +
              `  },\n` +
              `};\n`,
          );
        }
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
