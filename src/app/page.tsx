import MercuriaPanel from "@/components/MercuriaPanel";

export default function Page() {
  return (
    <main className="relative w-full flex justify-center pt-20 pb-32">

      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/background.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px) brightness(0.75)"
        }}
      />
      

      <MercuriaPanel />
    </main>
  );
}
