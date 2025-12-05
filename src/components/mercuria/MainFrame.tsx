export default function MainFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        w-full
        max-w-[900px]
        min-h-[300px]
        sm:min-h-[420px]
        rounded-[32px]
        border border-white/20
        bg-white/5 
        backdrop-blur-xl
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]
        p-6
        sm:p-10
        flex flex-col
        justify-center
      "
    >
      {children}
    </div>
  );
}
