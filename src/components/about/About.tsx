import React from "react";

const About = () => {
  const terkait = [
    {
      icon: "/icon/icon1.png",
      judul: "Berpengalaman",
      lanjutan: "lebih dari 2 dekade",
      deskripsi:
        "GALAXY terbukti telah mencetak ribuan Property Consultant sukses selama lebih dari 20 tahun",
    },
    {
      icon: "/icon/icon2.png",
      judul: "34 Kantor Cabang di Indonesia",
      deskripsi:
        "Solidaritas Tinggi, Hasil Cepat, dan Optimal. GALAXY Dipercaya oleh Developer terkemuka dan Punya Database Listing Secondary Terbesar Indonesia.",
    },
    {
      icon: "/icon/icon3.png",
      judul: "Langsung",
      lanjutan: "dari Pakarnya",
      deskripsi:
        "Dibimbing langsung oleh mentor berpengalaman di bidang properti",
    },
    {
      icon: "/icon/icon4.png",
      judul: "Inovasi Pemasaran",
      deskripsi:
        "Sistem pemasaran Yang Terintregasi dalam website & App GALAXY",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="mb-3 block md:hidden">
          <h1 className="text-5xl font-bold">Kenapa</h1>
          <h1 className="text-5xl font-bold">harus di GALAXY?</h1>
        </div>

        <img
          src="/images/foto2.jpeg"
          className="w-[429px] h-[608px] object-cover rounded-tr-full"
        />

        <div className="p-6">
          <div className="mb-3 hidden md:block">
            <h1 className="text-5xl font-bold">Kenapa</h1>
            <h1 className="text-5xl font-bold">harus di GALAXY?</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {terkait.map((penjelasan, urutan) => (
              <div key={urutan} className="max-w-xs mb-6">
                <img src={penjelasan.icon} className="w-[102px] h-20" />
                <div className="mt-6 mb-4">
                  <h1 className="text-2xl font-bold">{penjelasan.judul}</h1>
                  {penjelasan.lanjutan && (
                    <h1 className="text-2xl font-bold">
                      {penjelasan.lanjutan}
                    </h1>
                  )}
                </div>
                <p>{penjelasan.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
