const products = [
  { title: "Smartwatch", price: "$199", img: "/watch.png" },
  { title: "Smart Speaker", price: "$99", img: "/speaker.png" },
  { title: "Camera", price: "$899", img: "/camera.png" },
];

export default function SubProducts() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-8">
      {products.map((p) => (
        <div
          key={p.title}
          className="
            rounded-[24px]
            border border-white/20
            bg-white/10
            backdrop-blur-xl
            p-8
            flex flex-col items-center justify-center
            text-center
            h-[260px]
          "
        >

          <img
            src={p.img}
            alt={p.title}
            className="w-[120px] h-[120px] max-h-[120px] object-contain mb-4"
          />

          <div className="text-lg font-medium mb-1">{p.title}</div>
          <div className="text-md opacity-80">{p.price}</div>
        </div>
      ))}
    </div>
  );
}
