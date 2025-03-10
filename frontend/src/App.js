import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import StatsSection from './components/StatsSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <StatsSection />
      <div className="min-h-screen bg-gray-100 p-4">
        {/* Navbar */}
        <nav className="flex justify-center gap-4 mb-4">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">Home</Link>
          <Link to="/admin" className="bg-gray-500 text-white px-4 py-2 rounded">Admin</Link>
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
