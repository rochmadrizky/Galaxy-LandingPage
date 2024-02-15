import { IconDots, IconOvalVerticalFilled } from "@tabler/icons-react";
import React from "react";

const Career = () => {
  const gambar = [
    "/career/01.jpeg",
    "/career/02.jpeg",
    "/career/03.jpeg",
    "/career/04.jpeg",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-28 text-5xl font-bold text-center">
          Cerita sukses GALAXIANS
        </h1>

        <div className="pt-2 text-center">
          <p>
            We're dedicated group of Sed ut perspiciatis unde omnis iste natus
            error sit
          </p>

          <p>voluptatem accusantium doloremque laudantium</p>
        </div>

        <div className="pt-16 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gambar.map((foto, urutan) => (
              <img
                key={urutan}
                src={foto}
                className="w-[280px] h[280px] rounded-2xl"
                alt={`Career ${urutan + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center justify-center pt-16">
            <IconDots className="h-14 w-14 text-[#C4C4C4]" />
            <IconOvalVerticalFilled className="text-[#980000]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
