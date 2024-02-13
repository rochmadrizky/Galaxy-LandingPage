import React from "react";
import { Slidebar } from "../Slidebar";

const Partner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="p-4">
          <h1 className="text-center text-3xl font-bold">
            Lebih dari
            <span className="text-[#972421] px-1">10.000++</span>Properti dari
            Berbagai Developer,
          </h1>
          <h1 className="text-center text-3xl font-bold">
            Siap untuk Kamu Jual!
          </h1>
        </div>

        <div className="mt-14">
          <div className="flex flex-col items-center justify-center px-4">
            <div className="grid grid-cols-3 md:grid-cols-6 items-center justify-center gap-6">
              <div className="flex items-center justify-center">
                <img
                  src="/partner/partner1.png"
                  className="w=[177px] h-[177px]"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/partner/partner2.png"
                  className="w=[146px] h-[86px]"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/partner/partner3.png"
                  className="w=[151px] h-[108px]"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/partner/partner4.jpeg"
                  className="w=[102px] h-[79px]"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/partner/partner5.png"
                  className="w=[79px] h-[91px]"
                />
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/partner/partner6.png"
                  className="w=[77px] h-[96px]"
                />
              </div>
            </div>
            {/* <Slidebar /> */}
            <div className=""></div>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex flex-col items-center justify-center"></div>
          <h1 className="text-4xl font-bold text-center">
            Dukungan Perbankan <span className="text-[#972421]">GALAXY </span>{" "}
            Mempermudah Klien dalam Urusan KPR
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center mt-12">
            <div className="flex items-center justify-center">
              <img src="/partner/bca.png" className="w-[151px] h-[108px]" />
            </div>

            <div className="flex items-center justify-center">
              <img src="/partner/bca.png" className="w-[151px] h-[108px]" />
            </div>

            <div className="flex items-center justify-center">
              <img src="/partner/bca.png" className="w-[151px] h-[108px]" />
            </div>

            <div className="flex items-center justify-center">
              <img src="/partner/bca.png" className="w-[151px] h-[108px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
