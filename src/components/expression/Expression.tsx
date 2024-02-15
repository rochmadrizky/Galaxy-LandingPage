import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";

const kesaksian = [
  {
    nama: "Sutoto Yakobus",
    jabatan: "Senior Director Citraland Surabaya",
    deskripsi:
      "Galaxians adalah  team yang tangguh dan produktif. dibawah kepemimpinan ibu Fenny Gunawan yang ulet, gesit, pantang menyerah, telah mejadikan tim GALAXY ini menjadi salah satu kunci sukses pemasaran produk-produk ciputra selama beberapa tahun terakhir.",
  },
  {
    nama: "Rudi Harsono",
    jabatan: "Vice President Realty III PP Property",
    deskripsi:
      "Bu Fenny yang cukup berpengalaman di bidang property sejauh ini sudah memberikan sebuah kontribusi yang cukup signifikan terhadap penjulan properti dari kami PP property. perkembangan ke depan bisa memberikan sebuah nuansa yang positif.",
  },
  {
    nama: "Hendra S. Gondokusumo",
    jabatan: "President Direktur dan CEO PT Intiand Development TBK",
    deskripsi:
      "Apresiasi yang tinggi atas suksesnya GALAXY dalam memasarkan kondominium Graha Golf Surabaya. Penjualan Graha sangat memuaskan ini dapat diraih karena adanya kompetensi dan kerjasama yang baik dari konsultant properti GALAXY. kepemimpinan yang kuat dan jejaring yang luas.",
  },
  {
    nama: "James Gwee",
    jabatan:
      "Indonesia's Favourite Trainer and seminar speaker & Founder CARE for The Nation",
    deskripsi:
      "GALAXY Office is professionally managed and at the same time, the atmosphere is very homey. the agent are cheerful, energetic and yet, you could feel that they arre proud to be part of GALAXY Family",
  },
];

const Expression = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-center">
          Apa kata mereka tentang GALAXY?
        </h1>

        <div className="text-center pt-5 pb-10">
          <p>
            We are self-service data analytics software that lets you create
            visually appealing data
          </p>
          <p>visualisations and insightful dashboards in minutes.</p>
        </div>

        <div className="pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {kesaksian.map((ucapan, index) => (
              <div
                key={index}
                className="border rounded-xl flex flex-col justify-between p-4"
              >
                <div className="p-4">
                  <div className="p-2">
                    <div className="text-center font-bold">
                      <h1 className="text-[15px]">{ucapan.nama}</h1>
                      <h1 className="text-[12px] text-[#980000]">
                        {ucapan.jabatan}
                      </h1>
                    </div>

                    <div className="w-[209px] h-[98px] pt-4">
                      <p className="text-[12px]">{ucapan.deskripsi}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center pt-16 justify-center gap-2 text-[#980000]">
                  <p>Lihat Detail</p>
                  <IconArrowNarrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expression;
