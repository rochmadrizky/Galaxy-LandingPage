import React from "react";
import { IconDots, IconOvalVerticalFilled } from "@tabler/icons-react";

const Partner = () => {
  const partner = [
    "/partner/partner1.png",
    "/partner/partner2.png",
    "/partner/partner3.png",
    "/partner/partner4.jpeg",
    "/partner/partner5.png",
    "/partner/partner6.png",
  ];

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
              {partner.map((gambar, urutan) => (
                <div key={urutan} className="flex items-center justify-center">
                  <img
                    src={gambar}
                    alt={`Partner ${urutan + 1}`}
                    className="partner-image"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <IconDots className="h-14 w-14 text-[#C4C4C4]" />
              <IconOvalVerticalFilled className="text-[#980000]" />
            </div>
          </div>
        </div>

        <div className="mt-24">
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

          <div className="flex items-center justify-center">
            <IconDots className="h-14 w-14 text-[#C4C4C4]" />
            <IconOvalVerticalFilled className="text-[#980000]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
