export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-3xl tracking-[0.25em] font-semibold">
        MERCURIA
      </div>

      <div className="flex gap-6 opacity-70 text-xl">
        <i className="ri-search-line"></i>
        <i className="ri-user-line"></i>
      </div>
    </div>
  );
}
