import React from "react";
import Testimony from "../components/Testimony";
import Contact from "../components/Contact";


const Home = () => {
  return (
    <div>
      {/* Bagian atas halaman */}
      <h1 className="text-center text-4xl font-bold my-8">Selamat Datang di Bali Tour Travel</h1>

      {/* Menampilkan Testimoni */}
      <Testimony />
      
      {/* Konten lainnya */}
      <Contact /> {/* Contact Section Ditambahkan di Sini */}
    </div>
  );
};
export default Home;
