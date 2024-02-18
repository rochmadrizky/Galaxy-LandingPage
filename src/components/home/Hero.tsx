import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  const gambar = [
    { foto: "/images/1.png", gaya: { right: 0 } },
    { foto: "/images/2.png", gaya: { right: "13px" } },
    { foto: "/images/3.png", gaya: { right: "26px" } },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="p-4">
          <div className="flex flex-col">
            <div className="w-full md:w-[500px] mb-8">
              <div className="text-3xl md:text-5xl font-bold">
                <h1>Saatnya Jadi</h1>
                <h1 className="py-2 text-[#972421]">&apos;Rich People&apos;</h1>
              </div>

              <div className="text-3xl md:text-5xl font-bold">
                <h1>dari Bisnis Properti</h1>
                <h1 className="py-2">
                  Bersama <span className="text-[#972421]">GALAXY!</span>
                </h1>
              </div>
            </div>

            <div className="w-full md:w-[422px] mb-8">
              <p>
                GALAXY perusahaan yang bergerak di bidang jasa dan konsultasi
                properti yang terbaik dan terpercaya sejak 2002
              </p>
            </div>

            <Button className="w-[200px] h-16 text-lg" variant="default">
              Gabung Sekarang
            </Button>

            <div className="flex flex-col md:flex-row items-center my-8 relative">
              <div className="flex items-center relative mb-2">
                {gambar.map((orang, urutan) => (
                  <div
                    key={urutan}
                    className={`border-[3px] border-[#972421] rounded-full overflow-hidden bg-gray-200`}
                    style={{ position: "relative", ...orang.gaya }}
                  >
                    <Image
                      src={orang.foto}
                      className="w-10 h-10 object-scale-down"
                      alt="Hero"
                    />
                  </div>
                ))}
              </div>

              <div className="flex relative right-4">
                <h1 className=" text-4xl font-bold">10,000++</h1>
                <div>
                  <p>Property Consultant</p>
                  <p className="font-bold">GALAXY</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[670px] md:h-[480px]">
          <Image
            src="/images/foto1.jpeg"
            className=" object-fill rounded-md"
            alt="Hero dua"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
