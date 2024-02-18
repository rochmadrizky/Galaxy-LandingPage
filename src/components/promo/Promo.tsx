import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Promo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="p-4 flex flex-col items-center md:items-start justify-center">
          <div className="py-2">
            <div className="text-3xl md:text-5xl font-bold text-center md:text-left">
              <h1>Pakai Promo Spesial</h1>
              <h1>untuk mulai Jualan</h1>
              <h1>Properti Sekarang!</h1>
            </div>
          </div>

          <div className="pt-28">
            <Button
              className="w-[200px] h-16 text-lg text-[18px]"
              variant="default"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>

        <div className="w-full md:w-[577px] h-[772px] mb-9">
          <Image
            src="/promo/promo.jpeg"
            className="object-cover rounded-3xl"
            alt="Promo"
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
