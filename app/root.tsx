import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useState } from "react";
import { Button } from "./components/ui/button";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  const [showStack, setShowStack] = useState(false);
  return (
    <main className="relative pt-1 pb-12 container flex flex-col items-center justify-center min-h-[100svh]">
      <div className="bg-blue-500 animation-opacity size-80 top-0 left-0 absolute blur-[500px] firefox-blur" />
      <div className="bg-purple-500 animation-opacity size-80 bottom-0 right-0 absolute blur-[500px] firefox-blur" />
      <div className="flex gap-2 items-center w-full justify-center"></div>
      <h1 className="text-5xl font-bold tracking-tighter my-8 text-center">
        An error just ocurred
      </h1>

      <p className="font-mono opacity-75 text-lg text-center">
        {stack.split("\n")[0]}
      </p>
      {showStack ? (
        <>
          <div className="w-full border-b-1 border-white/5 my-8" />
          <pre className="font-mono">
            {stack
              .split("\n")
              .filter((l, i) => i !== 0)
              .join("\n")}
          </pre>
        </>
      ) : null}

      <Button
        onClick={() => {
          setShowStack(!showStack);
        }}
        className="left-4 bottom-4 absolute"
      >
        View stack trace
      </Button>
    </main>
  );
}
