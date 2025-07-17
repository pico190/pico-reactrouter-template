import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page not found" },
    {
      name: "description",
      content: "Could not find the page you are looking for.",
    },
  ];
}

export default function Home() {
  return (
    <div className="h-[100svh] flex items-center justify-center flex-col">
      <h1 className="font-bold text-8xl tracking-tighter">404</h1>
      <h1 className="text-4xl tracking-tighter">Page not found</h1>
    </div>
  );
}
