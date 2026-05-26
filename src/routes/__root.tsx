import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F0F0F] px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-3xl text-white" style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}>
          This page doesn't exist — but the pastries do.
        </h1>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-white text-white px-7 py-3 text-xs uppercase tracking-wider hover:bg-white hover:text-[#0F0F0F] transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0F0F0F] px-4">
      <div className="max-w-md text-center text-white">
        <h1 className="text-xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-[#A0A0A0]">Try refreshing or head back home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="bg-[#C8A96E] text-[#0F0F0F] px-5 py-2 text-xs uppercase tracking-wider"
          >
            Try again
          </button>
          <a href="/" className="border border-white text-white px-5 py-2 text-xs uppercase tracking-wider">Go home</a>
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
      { title: "Passionfruit Coffee | Bed-Stuy, Brooklyn" },
      {
        name: "description",
        content:
          "Passionfruit Coffee is an artisan café in Bed-Stuy, Brooklyn serving housemade pastries and specialty coffee from DOMA Roasters. Open daily 8am–5pm at 733 Madison St. No tip required.",
      },
      { property: "og:title", content: "Passionfruit Coffee | Bed-Stuy, Brooklyn" },
      { property: "og:description", content: "Coffee and Pastries in Bed-Stuy, Brooklyn. Open daily 8am–5pm." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&family=Caveat:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
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
      <Outlet />
    </QueryClientProvider>
  );
}
