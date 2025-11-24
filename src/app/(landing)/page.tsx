import { GlassPanel } from "@/components/ui/GlassPanel";

export default function LandingPage() {
  return (
    <main className="px-6 py-20">
      <GlassPanel className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight">
          Welcome to Mercuria
        </h1>
        <p className="text-slate-200/80 mt-3">
          Frosted luxury, digital precision.
        </p>
      </GlassPanel>
    </main>
  );
}
