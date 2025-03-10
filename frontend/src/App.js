import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import StatsSection from './components/StatsSection';
import Testimony from './components/Testimony';
import Contact from "./components/Contact";


const App = () => {
  return (
    <Router>
      <Navbar />
      <StatsSection />
      <Testimony />
      <Contact />
    </Router>
    
  );
};

export default App;
