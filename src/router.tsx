import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import InlineStyle from "./components/InlineStyle/InlineStyle";
// import CSSModules from "./components/CSSModules/CSSModules";
// import Tailwind from "./components/Tailwind/Tailwind";
// import StyledComponents from "./components/StyledComponents/StyledComponents";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/inline-style" element={<InlineStyle />} />
        <Route path="/css-modules" element={<CSSModules />} />
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/styled-components" element={<StyledComponents />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
