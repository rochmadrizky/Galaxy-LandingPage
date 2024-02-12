import React from "react";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col">
          <div className="w-full md:w-[500px] mb-8">
            <div className="text-3xl md:text-5xl font-bold">
              <h1>Saatnya Jadi</h1>
              <h1 className="py-2 text-[#972421]">'Rich People'</h1>
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
        </div>

        <div className="w-full md:w-[670px] md:h-[480px]">
          <img src="/images/foto1.jpeg" className=" object-fill rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
