import React from "react";
import Testimony from "../components/Testimony";

const Home = () => {
  return (
    <div>
      {/* Bagian atas halaman */}
      <h1 className="text-center text-4xl font-bold my-8">Selamat Datang di Bali Tour Travel</h1>

      {/* Menampilkan Testimoni */}
      <Testimony />
      
      {/* Konten lainnya */}
    </div>
  );
};
export default Home;
