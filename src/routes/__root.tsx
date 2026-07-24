import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "30 Dias Caminhando — Perca gordura sem academia" },
      { name: "description", content: "Guia prático para queimar gordura caminhando 30 minutos por dia. Sem academia, sem dieta maluca. Comece hoje por R$16,90." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "30 Dias Caminhando — Perca gordura sem academia" },
      { property: "og:description", content: "Guia prático para queimar gordura caminhando 30 minutos por dia. Sem academia, sem dieta maluca. Comece hoje por R$16,90." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "30 Dias Caminhando — Perca gordura sem academia" },
      { name: "twitter:description", content: "Guia prático para queimar gordura caminhando 30 minutos por dia. Sem academia, sem dieta maluca. Comece hoje por R$16,90." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d8ab01e2-4db7-4f6f-b00e-cf1d014dfd11/id-preview-5e9fbcf1--4b9ee396-8137-4009-95cd-8714fcbd8dae.lovable.app-1784671607977.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d8ab01e2-4db7-4f6f-b00e-cf1d014dfd11/id-preview-5e9fbcf1--4b9ee396-8137-4009-95cd-8714fcbd8dae.lovable.app-1784671607977.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        children: `
          (function () {
            // ALTERE O LINK PARA A PÁGINA QUE QUISER MOSTRAR QUANDO O USUÁRIO TENTAR SAIR
            var link = 'https://caminhafuncional.shop/';

            function setBackRedirect(url) {
              var urlBackRedirect =
                url.trim() +
                (url.indexOf('?') > 0 ? '&' : '?') +
                document.location.search.replace('?', '').toString();

              history.pushState({}, '', location.href);
              history.pushState({}, '', location.href);
              history.pushState({}, '', location.href);

              window.addEventListener('popstate', function () {
                setTimeout(function () {
                  location.href = urlBackRedirect;
                }, 1);
              });
            }

            setBackRedirect(link);
          })();
        `,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
