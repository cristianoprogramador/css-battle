import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Tailwind } from "./pages/Tailwind";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<Tailwind />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
