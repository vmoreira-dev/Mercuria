import Image from "next/image";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center bg-[#050814] px-4">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* Main Showcase Container */}
      <div className="
        relative z-10
        w-full max-w-[900px]
        p-10
        rounded-3xl
        bg-white/5
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_80px_-20px_rgba(255,255,255,0.15)]
        animate-fadeIn
      ">
        
        {/* Title */}
        <h1 className="text-5xl font-semibold tracking-tight mb-4">
          Wireless Headphones
        </h1>

        {/* Price + Button */}
        <div className="flex items-center gap-6 mb-10">
          <p className="text-xl opacity-80">$299</p>
          <button className="
            px-6 py-2 rounded-full text-sm font-medium
            bg-white/20 hover:bg-white/30
            backdrop-blur-xl transition-all
            border border-white/10
          ">
            Add to Bag
          </button>
        </div>

        {/* Product Image */}
        <div className="relative flex justify-center">
          <div className="
            w-[450px] h-[450px]
            rounded-2xl overflow-hidden
            shadow-xl
          ">
            <Image
              src="/background.webp"
              alt="Headphones"
              width={700}
              height={700}
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
