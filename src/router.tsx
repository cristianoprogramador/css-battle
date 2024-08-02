import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Tailwind } from "./pages/Tailwind";
import { InlineStyle } from "./pages/Inline-Style";
import { CSSModules } from "./pages/CSS-Modules";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/inline-style" element={<InlineStyle />} />
        <Route path="/css-modules" element={<CSSModules />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
