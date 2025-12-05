export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      
      <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-10 max-w-3xl w-full shadow-2xl">
        
        {/* Header */}
        <h1 className="text-4xl font-bold mb-3 tracking-tight">
          Mercuria
        </h1>

        <p className="text-white/70 mb-8 text-lg">
          Frosted UI. Clean. Minimal. Peak.
        </p>

        {/* Product Row */}
        <div className="flex gap-6 items-center">
          
          {/* Product Image */}
          <div className="w-64 h-64 rounded-2xl overflow-hidden bg-white/10 border border-white/10">
            <img 
              src="/background.webp"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">Wireless Headphones</h2>
            <p className="text-white/60 mb-4">$299</p>

            <button className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-full border border-white/20 transition">
              Add to Bag
            </button>
          </div>

        </div>

      </div>

    </main>
  );
}
