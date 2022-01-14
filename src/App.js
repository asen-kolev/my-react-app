import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact, GameWithHooks } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gamewithhooks" element={<GameWithHooks />} />
      </Routes>
    </div>
  );
}

export default App;
