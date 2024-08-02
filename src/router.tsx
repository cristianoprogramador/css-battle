import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Tailwind } from "./pages/Tailwind";
import { InlineStyle } from "./pages/Inline-Style";
import { CSSModules } from "./pages/CSS-Modules";
import { StyledComponents } from "./pages/Styled-Components";
import { EmotionStyle } from "./pages/Emotion";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/inline-style" element={<InlineStyle />} />
        <Route path="/css-modules" element={<CSSModules />} />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/emotion" element={<EmotionStyle />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
