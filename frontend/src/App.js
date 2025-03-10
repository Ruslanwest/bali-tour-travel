import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import StatsSection from './components/StatsSection';
import Testimony from './components/Testimony';
import Contact from "./components/Contact";
import Features from "./components/Features";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Features />
      <StatsSection />
      <Testimony />
      <Contact />
    </Router>
    
  );
};

export default App;
