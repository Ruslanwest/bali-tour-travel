import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Bali Tour Travel
        </h1>

        {/* Menu Layanan */}
        <div className="grid grid-cols-2 gap-4">
          {["Bali Tour", "Bali Driver", "Airport Transfer", "Bali Activities"].map((service, index) => (
            <div key={index} className="p-4 bg-blue-500 text-white text-center rounded-lg">
              {service}
            </div>
          ))}
        </div>

        {/* Tombol Kontak */}
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://wa.me/6281234567890" className="bg-green-500 px-4 py-2 rounded text-white">
            WhatsApp
          </a>
          <a href="https://instagram.com/balitourtravel" className="bg-pink-500 px-4 py-2 rounded text-white">
            Instagram
          </a>
          <a href="https://facebook.com/balitourtravel" className="bg-blue-600 px-4 py-2 rounded text-white">
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
