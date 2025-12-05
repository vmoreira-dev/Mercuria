export default function MainProduct() {
  return (
    <div
      className="
        rounded-[24px]
        border border-white/20
        bg-white/10
        backdrop-blur-xl
        p-14
        flex
        items-center
        justify-between
        gap-12
        min-h-[300px]
      "
    >
      <div className="flex-1">
        <h2 className="text-5xl font-semibold mb-3 leading-tight">
          Wireless Headphones
        </h2>

        <p className="text-2xl opacity-80 mb-6">$299</p>

        <button
          className="
            px-8 py-3
            rounded-full
            border border-white/40
            bg-white/10
            hover:bg-white/20
            transition
            text-lg
          "
        >
          Add to Bag
        </button>
      </div>

      <img
        src="/headphones.png"
        alt="Headphones"
        className="w-[320px] h-auto object-contain"
      />
    </div>
  );
}
