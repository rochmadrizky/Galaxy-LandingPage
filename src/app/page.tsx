import About from "@/components/about/About";
import Hero from "@/components/home/Hero";
import Partner from "@/components/partner/Partner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="p-8 container">
        <img src="/logo/galaxy.png" className="w-32 h-11" />
      </div>

      <div className="mb-28 md:my-10">
        <Hero />
      </div>

      <div className="mb-28 md:my-10">
        <About />
      </div>

      <div className="mb-28 md:my-10">
        <Partner />
      </div>
    </div>
  );
}
