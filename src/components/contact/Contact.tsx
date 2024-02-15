import React from "react";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 bottom-0">
      <div className="flex flex-col items-center justify-center">
        <div className="p-4">
          <div className="pt-44">
            <h1 className="text-5xl font-bold text-white">
              Masih ada pertanyaan lain?
            </h1>
          </div>
          <div className="pt-14 pb-32">
            <Button
              className="w-[282px] h-16 text-lg text-[18px] bg-white text-black"
              variant="default"
            >
              Hubungi Via Whatsapp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
