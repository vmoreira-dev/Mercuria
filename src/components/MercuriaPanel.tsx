import Header from "./Header";
import MainProduct from "./MainProduct";
import SubProducts from "./SubProducts";

export default function MercuriaPanel() {
  return (
    <div
      className="
        w-[1300px]
        rounded-[32px]
        border border-white/20
        bg-white/10
        backdrop-blur-2xl
        p-16
        mx-auto
        space-y-16
      "
    >
      <Header />
      <MainProduct />
      <SubProducts />
    </div>
  );
}
