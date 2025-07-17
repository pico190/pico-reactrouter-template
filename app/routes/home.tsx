import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "" }, { name: "description", content: "" }];
}

export default function Home() {
  return (
    <div className="h-[100svh] flex items-center flex-col gap-2 justify-center">
      <h1 className="font-bold text-7xl tracking-tighter">Index page</h1>
      <p className=" tracking-tighter">
        ¡Thanks for using{" "}
        <code className="bg-white/5 px-1 border-1 rounded-sm py-0.5">
          create-pico-app
        </code>
        !
      </p>
    </div>
  );
}
