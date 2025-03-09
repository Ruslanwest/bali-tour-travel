import React, { useState } from "react";

const Admin = () => {
  const [services, setServices] = useState([
    "Bali Tour",
    "Bali Driver",
    "Airport Transfer",
    "Bali Activities",
  ]);
  const [newService, setNewService] = useState("");

  const addService = () => {
    if (newService.trim() !== "") {
      setServices([...services, newService]);
      setNewService("");
    }
  };

  const removeService = (index) => {
    setServices(services.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Panel
        </h1>

        {/* Form Tambah Layanan */}
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Tambahkan layanan baru"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            className="p-2 border border-gray-300 rounded-l w-full"
          />
          <button
            onClick={addService}
            className="bg-green-500 text-white px-4 py-2 rounded-r"
          >
            Tambah
          </button>
        </div>

        {/* Daftar Layanan */}
        <ul className="mt-4">
          {services.map((service, index) => (
            <li key={index} className="flex justify-between bg-gray-200 p-2 rounded mb-2">
              {service}
              <button onClick={() => removeService(index)} className="bg-red-500 text-white px-3 py-1 rounded">
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
