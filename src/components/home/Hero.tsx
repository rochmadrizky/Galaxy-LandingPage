import React from "react";
import { ButtonDemo } from "../ButtonDemo";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="p-4">
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

            <div>
              <ButtonDemo></ButtonDemo>
            </div>

            <div className="flex flex-col md:flex-row items-center my-8 relative">
              <div className="flex items-center relative mb-2">
                <div className="border-[3px] border-[#972421] rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/images/1.png"
                    className="w-10 h-10 object-scale-down"
                  />
                </div>

                <div className="border-[3px] border-[#972421] rounded-full overflow-hidden relative right-3 bg-gray-200">
                  <img
                    src="/images/2.png"
                    className="w-10 h-10 object-scale-down"
                  />
                </div>

                <div className="border-[3px] border-[#972421] rounded-full overflow-hidden relative right-6 bg-gray-200">
                  <img
                    src="/images/3.png"
                    className="w-10 h-10 object-scale-down"
                  />
                </div>
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
          <img src="/images/foto1.jpeg" className=" object-fill rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
