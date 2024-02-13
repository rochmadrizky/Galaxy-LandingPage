import React from "react";

const About = () => {
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
            <div className="max-w-xs mb-6">
              <img src="/icon/icon1.png" className="w-[102px] h-20" />
              <div className="mt-6 mb-4">
                <h1 className="text-2xl font-bold">Berpengalaman</h1>
                <h1 className="text-2xl font-bold">lebih dari 2 dekade</h1>
              </div>
              <p>
                GALAXY terbukti telah mencetak ribuan Property Consultant sukses
                selama lebih dari 20 tahun
              </p>
            </div>

            <div className="max-w-xs mb-6">
              <img src="/icon/icon2.png" className="w-[102px] h-20" />
              <div className="mt-6 mb-4">
                <h1 className="text-2xl font-bold">
                  34 Kantor Cabang di Indonesia
                </h1>
              </div>
              <p>
                Solidaritas Tinggi, Hasil Cepat, dan Optimal. GALAXY Dipercaya
                oleh Developer terkemuka dan Punya Database Listing Secondary
                Terbesar Indonesia.
              </p>
            </div>

            <div className="max-w-xs mb-6">
              <img src="/icon/icon3.png" className="w-[102px] h-20" />

              <div className="mt-6 mb-4">
                <h1 className="text-2xl font-bold">Langsung</h1>
                <h1 className="text-2xl font-bold">dari Pakarnya</h1>
              </div>

              <p>
                Dibimbing langsung oleh mentor berpengalaman di bidang properti
              </p>
            </div>

            <div className="max-w-xs mb-6">
              <img src="/icon/icon4.png" className="w-[102px] h-20" />

              <div className="mt-6 mb-4">
                <h1 className="text-2xl font-bold">Inovasi Pemasaran</h1>
              </div>

              <p>
                Sistem pemasaran Yang Terintregasi dalam website & App GALAXY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
