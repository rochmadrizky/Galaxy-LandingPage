import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="p-8 container">
        <img src="/logo/galaxy.png" className="w-32 h-11" />
      </div>

      <Hero />
    </div>
  );
}
