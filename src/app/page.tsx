import About from "@/components/about/About";
import Bank from "@/components/bank/Bank";
import Career from "@/components/career/Career";
import Consultan from "@/components/consultan/Consultan";
import Contact from "@/components/contact/Contact";
import Expression from "@/components/expression/Expression";
import Hero from "@/components/home/Hero";
import Partner from "@/components/partner/Partner";
import Promo from "@/components/promo/Promo";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="p-8 container">
        <img src="/logo/galaxy.png" className="w-32 h-11" alt="Logo" />
      </div>

      <div className="mb-28 md:my-10">
        <Hero />
      </div>

      <div className="mb-28 md:my-10">
        <About />
      </div>

      <div className="mb-28 md:mt-10 md:mb-5">
        <Partner />
      </div>

      <div className="mb-28 md:mb-10">
        <Bank />
      </div>

      <div className="mb-28 md:my-10 bg-[#EFEEEE]">
        <Career />
      </div>

      <div className="mb-28 md:my-10">
        <Expression />
      </div>

      <div className="mb-28 md:my-10 bg-[#980000]">
        <Consultan />
      </div>

      <div className="mb-8 md:my-10">
        <Promo />
      </div>

      <div className="bg-black">
        <Contact />
      </div>
    </div>
  );
}
