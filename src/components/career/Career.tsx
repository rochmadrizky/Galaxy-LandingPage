"use client";

import { IconPlayerTrackNext, IconPlayerTrackPrev } from "@tabler/icons-react";
import { useState, useRef } from "react";

const IsiContent = () => {
  const konten = [
    {
      gambar: "/career/01.jpeg",
    },
    {
      gambar: "/career/02.jpeg",
    },
    {
      gambar: "/career/03.jpeg",
    },

    {
      gambar: "/career/04.jpeg",
    },
  ];

  const [indeksSaatIni, mengaturIndeksSaatIni] = useState(0);
  const [seretDariX, mengaturSeretDariX] = useState(0);
  const [titikAktif, mengaturTitikAktif] = useState(0);
  const penggeser = useRef<HTMLDivElement>(null);

  const sebelumnya = () => {
    const pengechekan =
      indeksSaatIni === 0 ? konten.length - 1 : indeksSaatIni - 1;
    mengaturIndeksSaatIni(pengechekan);
    mengaturTitikAktif(pengechekan);
  };

  const selanjutnya = () => {
    const pengechekan =
      indeksSaatIni === konten.length - 1 ? 0 : indeksSaatIni + 1;
    mengaturIndeksSaatIni(pengechekan);
    mengaturTitikAktif(pengechekan);
  };

  const tekanMouse = (klik: React.MouseEvent<HTMLDivElement>) => {
    mengaturSeretDariX(klik.pageX);
  };

  const pergerakanMouse = (geser: React.MouseEvent<HTMLDivElement>) => {
    if (seretDariX === 0 || !penggeser.current) return;

    const posisiX = geser.pageX;
    const perbedaan = posisiX - seretDariX;

    if (perbedaan > 50 && indeksSaatIni !== konten.length - 1) {
      selanjutnya();
      mengaturSeretDariX(0);
    } else if (perbedaan < -50 && indeksSaatIni !== 0) {
      sebelumnya();
      mengaturSeretDariX(0);
    }
  };

  const lepasKlikMouse = () => {
    mengaturSeretDariX(0);
  };

  const titik = konten.map((_, urutan) => (
    <span
      key={urutan}
      className={`h-3 w-3 bg-black ring-white ring-1 rounded-full mx-1 cursor-pointer ${
        urutan === titikAktif && "bg-white"
      }`}
      onClick={() => ubahKontenDenganTitik(urutan)}
    />
  ));

  const ubahKontenDenganTitik = (urutanIndex: number) => {
    mengaturTitikAktif(urutanIndex);
    mengaturIndeksSaatIni(urutanIndex);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="pt-28 text-5xl font-bold text-center">
          Cerita sukses GALAXIANS
        </h1>

        <div className="pt-2 text-center">
          <p>
            We&apos;re dedicated group of Sed ut perspiciatis unde omnis iste
            natus error sit
          </p>

          <p>voluptatem accusantium doloremque laudantium</p>
        </div>
      </div>

      <div
        className="w-full m-auto px-4 flex flex-col items-center justify-center"
        ref={penggeser}
        onMouseDown={tekanMouse}
        onMouseMove={pergerakanMouse}
        onMouseUp={lepasKlikMouse}
      >
        <div className="flex items-center justify-center gap-2 py-5">
          <button
            onClick={sebelumnya}
            className={`${
              indeksSaatIni === 0
                ? "pointer-events-none"
                : "pointer-events-auto"
            } bg-black rounded-full p-3`}
          >
            <IconPlayerTrackPrev className="text-white" />
          </button>

          <div
            className="w-[280px] h-[280px] rounded-3xl overflow-hidden bg-center bg-cover duration-500"
            style={{ backgroundImage: `url(${konten[indeksSaatIni].gambar})` }}
          ></div>

          <button
            onClick={selanjutnya}
            className={`${
              indeksSaatIni === konten.length - 1
                ? "pointer-events-none"
                : "pointer-events-auto"
            } bg-black rounded-full p-3`}
          >
            <IconPlayerTrackNext className="text-white" />
          </button>
        </div>

        <div className="flex items-center justify-center pb-24">{titik}</div>
      </div>
    </div>
  );
};

export default IsiContent;
