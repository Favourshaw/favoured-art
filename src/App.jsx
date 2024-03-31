import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import { Home, About, Gallery, Contact } from "./pages";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className=" font-madimi">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
