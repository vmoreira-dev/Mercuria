export default function MainFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        w-[75%]
        min-h-[420px]
        mx-auto
        mt-20
        rounded-[32px]
        border border-white/20
        bg-white/5 
        backdrop-blur-xl
        shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]
        p-10
        flex flex-col
        justify-start
      "
    >
      {children}
    </div>
  );
}
