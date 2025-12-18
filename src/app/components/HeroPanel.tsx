export default function HeroPanel() {
  return (
    <div
      className="
        w-[1150px]
        overflow-hidden
        rounded-[36px]
        bg-[#0c0f15]
        shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)]
        border border-white/10
      "
    >
      <img
        src="/background.webp"
        alt="Skyline"
        className="w-full h-[350px] object-cover"
      />

      <div className="px-10 py-8 bg-[#0c0f15]">
        <h1 className="text-4xl font-bold tracking-wider mb-3">
          MERCURIA
        </h1>

        <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
          A frosted precision interface layered over a calm urban skyline.
          Crafted with clarity, calmness, and the finesse of a future city at dawn.
        </p>
      </div>
    </div>
  );
}

