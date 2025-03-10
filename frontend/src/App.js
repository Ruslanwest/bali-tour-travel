import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import StatsSection from './components/StatsSection';
import Testimony from './components/Testimony';

const App = () => {
  return (
    <Router>
      <Navbar />
      <StatsSection />
      <Testimony />
    </Router>
    
  );
};

export default App;
