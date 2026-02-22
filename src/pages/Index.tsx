import RetroGrid from "@/components/RetroGrid";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background select-none">
      <RetroGrid />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        <h1 className="text-6xl sm:text-8xl font-light tracking-tight text-primary mb-12 animate-fade-in">
          Agent Locker
        </h1>

        <div className="space-y-2 mb-14 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground text-base sm:text-lg">
            Launch AI assistants in a secure sandbox.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg">
            Deploy containerized agents with one click.
          </p>
          <p className="text-muted-foreground text-base sm:text-lg">
            Run workflows with your tools, safely and in control.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <button
            className="group flex items-center gap-3 rounded-full border border-border bg-secondary/30 px-8 py-3 text-foreground transition-all hover:bg-secondary/50 hover:border-primary/40"
          >
            Try Agent Locker for MacOS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            className="group flex items-center gap-3 rounded-full border border-border bg-secondary/30 px-8 py-3 text-foreground transition-all hover:bg-secondary/50 hover:border-primary/40"
          >
            Try Agent Locker for Windows
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
