import React from "react";
import clsx from "clsx";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl",
        "border border-white/20",
        "bg-white/5",
        "backdrop-blur-2xl",
        "shadow-[0_20px_60px_-10px_rgba(0,0,0,0.55)]",
        "p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}


export const Glass = {
  Light: ({ children, className }: GlassPanelProps) => (
    <div
      className={clsx(
        "rounded-3xl border border-white/15 bg-white/3 backdrop-blur-xl p-6 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  ),

  Heavy: ({ children, className }: GlassPanelProps) => (
    <div
      className={clsx(
        "rounded-3xl border border-white/25 bg-white/10 backdrop-blur-3xl p-6 shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  ),
};
