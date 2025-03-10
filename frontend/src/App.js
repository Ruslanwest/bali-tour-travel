import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import StatsSection from './components/StatsSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <StatsSection />
    </Router>
  );
};

export default App;
